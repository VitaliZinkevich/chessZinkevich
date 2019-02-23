import React, { PureComponent } from 'react'

export default class Score extends PureComponent {
  render() {
    return (
      <div className='rotated mt-50'>

        <div className="progress">
        <div className="progress-bar w-75" role="progressbar" aria-valuenow="-100" aria-valuemin="-500" aria-valuemax="500"></div>
        </div>

        <div className="progress">
        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        
    </div>
      
    )
  }
}
