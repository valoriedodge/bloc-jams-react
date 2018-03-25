import React, { Component } from 'react';
 
 class PlayerBar extends Component {
   render() {
     return (
       <section className="player-bar">
         <section id="buttons">
           <div id="previous" onClick={this.props.handlePrevClick}>
             <span className="ion-skip-backward"></span>
           </div>
           <div id="play-pause" onClick={this.props.handleSongClick}>
             <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
           </div>
           <div id="next" onClick={this.props.handleNextClick}>

             <span className="ion-skip-forward"></span>
           </div>
         </section>
         <section id="time-control">                                                                    
	   <div className="current-time">{this.props.currentTime}</div>
           <input 
             type="range" 
             className="seek-bar" 
             value={(this.props.currentTime / this.props.duration) || 0} 
	     onChange={this.props.handleTimeChange}
             max="1" 
             min="0" 
             step="0.01" 
           />   
           <div className="total-time">{this.props.duration}</div> 
         </section>
         <section id="volume-control">
           <div className="icon ion-volume-low"></div>
            <input 
             type="range" 
             className="seek-bar" 
             value={this.props.volume}
	     onChange={this.props.handleVolumeChange}
             max="1" 
             min="0" 
             step="0.01" 
           />   
           <div className="icon ion-volume-high"></div>
         </section>
       </section>
     );
   }
 }
 
 export default PlayerBar;
