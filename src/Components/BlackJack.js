import React, { Component } from "react";
import './styles/BlackJack.css';
import Com from './Com.js';

export default class Blackjack extends Component {
    constructor() {
    super();
    this.checkValidInput = this.checkValidInput.bind(this);
    this.setSettings = this.setSettings.bind(this);
    this.setBet = this.setBet.bind(this);
    this.getDeck = this.getDeck.bind(this);
    this.toggleBetWindow = this.toggleBetWindow.bind(this);
    this.toggleSettingsWindow = this.toggleSettingsWindow.bind(this);
    this.total = this.total.bind(this);
    this.hit = this.hit.bind(this);
    this.handler = this.handler.bind(this);
    this.sim = this.sim.bind(this);
    this.stand = this.stand.bind(this);
    this.state = {
      balance: 0,
      wins: 0,
      losses: 0,
      wager: [],
      deck: [],
      user: [],
      dealer: [],
      show: false,
      split: false,
      double: [false]
    };
  }

  deck = [];

  getDeck = async () =>{
    let response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8');
    let prom = await response.json();
    response = await fetch(`https://deckofcardsapi.com/api/deck/${prom.deck_id}/draw/?count=416`);
    prom = await response.json();
    this.setState({deck: prom.cards});
  }

  checkValidInput = (input) =>{
    if(input.length === 0){
        alert("Input must not be empty.");
        return false;
    }
    for(let i=0;i<input.length;i++){
        //check for non-numeric characters
        if(input.charCodeAt(i)<48||input.charCodeAt(i)>57){
            alert("Input must not contain letters or special characters.");
            return false;
        }
    }
    return true;
  }

  setSettings = (e) =>{
    e.preventDefault();
    //check for valid input
    let balanceInput = e.target.balance.value;
    let validInput = this.checkValidInput(balanceInput);
    if(validInput){
        balanceInput = parseInt(balanceInput);
    //check for range
        if(balanceInput > 100000||balanceInput <= 0){
            alert("Balance must be between 1 and 100,000.");
            validInput = false;
            return;
        }else{
            this.setState({balance: balanceInput});
        }
    }else{
        return;
    }
    this.getDeck();
    this.toggleSettingsWindow();
    this.toggleBetWindow();
  }

  toggleSettingsWindow = () =>{
    let settingsForm = document.querySelector(".setForm");
    let gameStats = document.querySelector(".gameStats");
    let placeHolder = document.querySelector(".placeHolder");
    //gameStats.style.display = "flex";
    //settingsForm.style.display = "none";
    //betForm.style.display = "flex";
    if(settingsForm.style.display !== "none"){
        settingsForm.style.display = "none";
        gameStats.style.display = "flex";
        placeHolder.style.display = "flex";
        console.log("hiding settings");
    }else{
        settingsForm.style.display = "flex";
        gameStats.style.display = "none";
        placeHolder.style.display = "none";
        console.log("showing settings");
    }
  }

  toggleBetWindow = () =>{
    let betForm = document.querySelector(".betForm");
    let standBtn = document.querySelector(".stand");
    if(betForm.style.display !== "none"){
        betForm.style.display = "none";
        standBtn.style.display = "flex";
    }else{
        betForm.style.display = "flex";
        standBtn.style.display = "none";
    }
  }

  setBet = (e) =>{
    e.preventDefault();
    let wager = e.target.bet.value;
    let validInput = this.checkValidInput(wager);
    if(validInput){
        wager = parseInt(wager);
        //check for range
        if(wager > this.state.balance||wager <= 0){
            alert("Wager must be between 1 and your current balance.");
            return;
        }else{
            this.setState({
                wager: [wager],
                balance: this.state.balance - wager
            });
            this.toggleBetWindow();
        }
    }else{
        return;
    }
    this.deck = this.state.deck;
    this.deal();
  }

  deal = () =>{
    let user = [this.deck[this.deck.length - 2],this.deck[this.deck.length - 6]];
    /*let user = [{code: 'KC', image: 'https://deckofcardsapi.com/static/img/KC.png', value: 'KING', suit: 'CLUBS'},
                {code: 'KD', image: 'https://deckofcardsapi.com/static/img/KD.png', value: 'KING', suit: 'DIAMONDS'}
    ]*/
    let dealer = [this.deck[this.deck.length - 4],this.deck[this.deck.length - 8]];
    this.deck = this.deck.slice(0, this.deck.length - 8);
    this.setState({
        user: user,
        dealer: dealer,
        deck: this.deck,
        show: false,
        split: false,
        double: [false]
    });
    console.log(this.state);
  }

  sim = (player) =>{
    let total = this.total(player);
    while(total < 17){
        player.push(this.deck.pop());
        total = this.total(player);
    }
    return player;
  }

  total = (cards) =>{
    let playerTotal = 0;
    let aceCount = 0;
    for(let i=0;i<cards.length;i++){
        if(cards[i].value === "ACE"){
            aceCount++;
            if(playerTotal + 11 > 21){
                playerTotal += 1;
                aceCount -= 1;
            }else{
                playerTotal += 11;
            }
        }else{
            if(isNaN(parseInt(cards[i].value))){
                playerTotal += 10;
            }else{
                playerTotal += parseInt(cards[i].value);
            }
            if(aceCount > 0 && playerTotal > 21){
                playerTotal -= 10;
                aceCount -= 1;
            }
        }
    }
    return playerTotal;
  }

  finishHand = (user,wager) =>{
    let dealer = Array.from(this.state.dealer);
    let wins = this.state.wins;
    let losses = this.state.losses;
    let balance = this.state.balance;
    dealer = this.sim(dealer);
    if(this.state.split){
        for(let i=0;i<user.length;i++){
            let userTotal = this.total(user[i]);
            let dealerTotal = this.total(dealer);
            if (userTotal>21){
                losses++;
            }else if (dealerTotal>21){
                wins++;
                balance += wager[0] * 2;
            }else{
                if(userTotal>dealerTotal){
                    if(userTotal === 21 && user.length === 2){
                        balance += wager[0] *.5;
                    }
                    wins++;
                    balance += wager[0] * 2;
                }else if(userTotal<dealerTotal){
                    losses++;
                }else{
                    if(userTotal ===21){
                        if(user[i].length===2){
                            if(dealer.length >2){
                                wins++;
                                balance += wager[0]*1.5;
                            }
                            balance += wager[0];
                        }else if(dealer.length === 2){
                            losses++;
                        }else{
                            balance += wager[0]; 
                        }
                    }else{
                        balance += wager[0];
                    }
                }
            }
        }
    }else{
        let userTotal = this.total(user);
        let dealerTotal = this.total(dealer);
        if (userTotal>21){
            losses++;
        }else if (dealerTotal>21){
            wins++;
            balance += wager[0] * 2;
        }else{
            if(userTotal>dealerTotal){
                if(userTotal === 21 && user.length === 2){
                    balance += wager[0] *.5;
                }
                wins++;
                balance += wager[0] * 2;
            }else if(userTotal<dealerTotal){
                losses++;
            }else{
                if(userTotal ===21){
                    if(user.length===2){
                        if(dealer.length >2){
                            wins++;
                            balance += wager[0]*1.5;
                        }
                        balance += wager[0];
                    }else if(dealer.length === 2){
                        losses++;
                    }else{
                        balance += wager[0]; 
                    }
                }else{
                    balance += wager[0];
                }
            }
        }
    }
    this.setState({
        dealer: dealer,
        show: true,
        deck: this.deck,
        wins: wins,
        losses: losses,
        balance: balance
    });
    if(balance <= 0){
        alert("Game Over! You have run out of balance.");
        this.toggleSettingsWindow();
    }else{
        this.toggleBetWindow();
    }
  }

  handler = (action, index=null) =>{
    if(action === 0){ //hit
        this.hit(index);
    }else if(action === 1){ //double
        this.double(index)
    }else{ //split
        this.split(index);
    }
  }

  hit = (index) =>{    
    let cards = this.state.user;
    if(this.state.split){
        cards[index].push(this.deck.pop());
        this.setState({
            user: cards,
            deck: this.deck
        });
    }else{
        cards.push(this.deck.pop());
        this.setState({
            user: cards,
            deck: this.deck
        });
    }
  }

  double = (index) =>{
    let cards = Array.from(this.state.user);
    let wager = Array.from(this.state.wager);
    let balance = this.state.balance;
    let double = Array.from(this.state.double);
    if(index===null){
        double[0] = true;
        if(balance-wager[0]<0){    
            alert("Insufficient balance to double down.");
            return;
        }
        balance -= wager[0];
        wager[0] = wager[0] * 2;
        cards.push(this.deck.pop());
    }else{
        double[index] = true;
        if(balance-wager[index]<0){
            alert("Insufficient balance to double down.");
            return;
        }
        balance -= wager[index];
        wager[index] = wager[index] * 2;
        cards[index].push(this.deck.pop());
        
    }
    this.setState({
        user: cards,
        wager: wager,
        balance: balance,
        double: double,
        deck: this.deck
    });
    return null;
  }

  split = (index) =>{
    let cards = this.state.user;
    let wager = this.state.wager;
    let double = this.state.double;
    let balance = this.state.balance;
    double.push(false);
    if(index===null){
        cards = [[cards[0],this.deck.pop()],[cards[1],this.deck.pop()]];
        if(balance - wager[0] < 0){    
            alert("Insufficient balance to split.");
            return;
        }
        balance -= wager[0];
        wager = [wager[0],wager[0]];
        double = [false,false];
    }else{
        let newHand = [cards[index][1],this.deck.pop()];
        cards[index] = [cards[index][0],this.deck.pop()];
        cards.push(newHand);
        if(balance - wager[index] < 0){    
            alert("Insufficient balance to split.");
            return;
        }
        balance -= wager[index];
        wager.push(wager[index]);
        double.push(false);
    }
    this.setState({
        user: cards,
        wager: wager,
        deck: this.deck,
        split: true,
        double: double,
        balance: balance
    });
  }

  stand = () =>{
    return (
        <button className="stand BJB" style={{display: "none"}} onClick={() => this.finishHand(this.state.user, this.state.wager)}>Stand</button>
    );
  }

  user = (cards) =>{
    const hitBtn = (index=null) => {
        if(this.state.show) return null;
        if(this.state.split){
            if(this.total(cards[index]) >= 21) return null;
            if(this.state.double[index]) return null;
            return (
                <button className="hit BJB" onClick={() => this.handler(0,index)}>Hit</button>
            )
        }else{
            if(this.total(cards) >= 21) return null;
            if(this.state.double[0]) return null;
            return (
                <button className="hit BJB" onClick={() => this.handler(0)}>Hit</button>
            )
        }
    }

    const doubleBtn = (index=null) => {
        if(this.state.show) return null;
        if(this.state.split){
            if(cards[index].length !== 2) return null;
            if(this.total(cards[index]) >= 21) return null;
            if(this.state.double[index]) return null;
            return (
                <button className="double BJB" onClick={() => this.handler(1,index)}>Double</button>
            )
        }else{
            if(cards.length !== 2) return null;
            if(this.total(cards) >= 21) return null;
            if(this.state.double[0]) return null;
            return (
                <button className="double BJB" onClick={() => this.handler(1)}>Double</button>
            )
        }
    }
    
    const splitBtn = (index=null) => {
        if(this.state.show) return null;
        if(this.state.split){
            if(cards[index].length !== 2) return null;
            if(cards[index][0].value !== cards[index][1].value) return null;
            return(
                <button className="split BJB" onClick={() => this.handler(2,index)}>Split</button>
            )
        }else{
            if(cards.length !== 2) return null;
            if(cards[0].value !== cards[1].value) return null;
            return(
                <button className="split BJB" onClick={() => this.handler(2)}>Split</button>
            )
        }
    }

    if(this.state.user.length === 0){
        return (
            <div className="bottom"></div>
        )
    }else if(this.state.split){
        return (
            <div className="bottom">
                { cards.map((hand, index) => {
                    hand = Array.from(hand);
                    return (
                        <div className="user" key={index}>
                            <div className="userBtns">
                                { hitBtn(index) }
                                { doubleBtn(index) }
                                { splitBtn(index) }
                            </div>
                            <div className="hand">
                                { hand.map((card) => {
                                    return <img className="card" src={card.image} alt={card.code} />;
                                })}
                            </div>
                            <p className="total">Total: {this.total(hand)}</p>
                        </div>
                    );
                })}
            </div>
        )
    }else{
        return (
            <div className="bottom">
                <div className="user">
                    <div className="userBtns">
                        { hitBtn() }
                        { doubleBtn() }
                        { splitBtn() }
                    </div>
                    <div className="hand">
                        { cards.map((card) => {
                            return <img className="card" src={card.image} alt={card.code} />;
                        })}
                    </div>
                    <p className="total">Total: {this.total(cards)}</p>
                </div>
            </div>
        )
    }
  }

  render() {
    return (
        <div className="BJ column">
            <div className="top">
                <Com position="dealer" total={this.total(this.state.dealer)} cards={this.state.dealer} show={this.state.show} />
            </div>
            <div className="middle">
                <div className="gameStats" style={{display: "none"}}>
                    <p className="BJP">Balance: {this.state.balance}</p>
                    <p className="BJP">Wins: {this.state.wins}</p>
                    <p className="BJP">Losses: {this.state.losses}</p>
                </div>
                <div className="settings" style={{display: "flex"}}>
                    <form onSubmit={this.setSettings} className="setForm">
                        <label>Starting Balance:</label>
                        <input type="balance" name="balance" id="balance" placeholder="Max 100,000"></input>
                        <button className="submit BJB" style={{color: "black"}} type="submit">Start Game</button>
                    </form>
                    <form onSubmit={this.setBet} className="betForm" style={{display: "none"}} id="placeBet">
                        <label>Place Your Bet:</label>
                        <input type="bet" name="bet" id="bet" placeholder={`Max ${this.state.balance}`}></input>
                        <button className="submit BJB" style={{color: "black"}} type="submit">Place Bet</button>
                    </form>
                </div>
                <div className="placeHolder" style={{display: "none"}}/>
            </div>
            {this.user(this.state.user)}
            <div className="universal">
                {this.stand()}
            </div>
        </div>
        );
  }
}