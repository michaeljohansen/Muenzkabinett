import React from 'react';
import stateStore from 'app/stateStore';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClose)
  }
  handleClose() {
    document.removeEventListener('click', this.handleClose);
    stateStore.set({showInfo: false});
  }
  render() {
    const {transform} = this.props;
    return (
      <div className="popup popup--info">
        <div className="popup__inner">
          <div className="popup__main">
            <h3>About</h3>
            <p className="popup__copy">With over 500 000 coins the <a href="http://www.smb.museum/en/museums-institutions/muenzkabinett/home.html" target="_blank">Münzkabinett Berlin</a> has one of the most significant and comprehensive numismatic collections in the world. You can imagine how hard it is for the numismatists (the people who devote their lives to coins) to bring them into order to make sense of them. Similarly it is difficult to decide which coins to put on display in the museum and how to arrange them. The aim of this experiment is to develop playful ways to explore these historical artefacts, which are normally locked away in a vault or out of reach behind a glass pane. For a start, this tool makes a selection of about 26 000 coins explorable along a series of layouts and filters.</p>
            <h3>Team</h3>
            <div className="popup__section">
              <div className="popup__category">
                <span className="popup__label">Design & Development&ensp;&mdash;&ensp;</span> 
                <span className="popup__value">
                  <a target="_blank" href="https://twitter.com/flaviogortana">Flavio Gortana</a>
                </span>
              </div>
              <div className="popup__category">
                <span className="popup__label">Ideation & Research&ensp;&mdash;&ensp;</span>
                <span className="popup__value">Daniela Guhlmann, <a target="_blank" href="https://twitter.com/fvont">Franziska von Tenspolde</a></span>
              </div>
              <div className="popup__category">
                <span className="popup__label">Supervision&ensp;&mdash;&ensp;</span>
                <span className="popup__value">
                  <a target="_blank" href="https://twitter.com/nrchtct">Prof. Dr. Marian Dörk</a>
                </span>
              </div>
              <div className="popup__category">
                <span className="popup__label">Consulting&ensp;&mdash;&ensp;</span>
                <span className="popup__value">
                  <a target="_blank" href="https://twitter.com/WeisserBernhard">Prof. Dr. Bernhard Weisser</a>, Dr. Angela Berthold, <a target="_blank" href="https://twitter.com/KarstenDahmen">Dr. Karsten Dahmen</a>
                </span>
              </div>
            </div>
            <p className="popup__copy">Inspired by <a href="https://uclab.fh-potsdam.de/fw4/" target="_blank">Past Visions</a></p>
            <p className="popup__copy">The project was initiated during the project course <a href="https://uclab.fh-potsdam.de/vikus/" target="_blank">Visualizing Cultural Collections</a> at <a href="https://www.fh-potsdam.de/" target="_blank">University of Applied Sciences Potsdam</a>.</p>
            <p className="popup__copy">This project was built with <a href="http://www.pixijs.com/" target="_blank">PixiJS</a>, <a href="https://d3js.org/" target="_blank">d3</a> and <a href="https://facebook.github.io/react/" target="_blank">React</a></p>
          </div>
          <div className="section">
            <h3>Share
              <a 
                className="icon-brand twitter-share-button"
                href="https://twitter.com/intent/tweet?text=A%20journey%20through%20a%20rich%20cultural%20collection.%20Play%20around%20with%20and%20explore%20one%20of%20the%20biggest%20coin%20collections.&url=https://uclab.fh-potsdam.de/coins" 
                data-size="large"></a>
            </h3>
          </div>
          <div className="popup__footer">
            <button onClick={this.handleClose} className="popup__btn btn btn--big btn--primary">Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;