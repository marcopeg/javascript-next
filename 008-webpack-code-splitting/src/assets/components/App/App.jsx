/**
 * Stateful React Component
 */

import React, { Component } from 'react'
import ElapsedTime from '../ElapsedTime'
import styles from './App.css'

export class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            started: Date.now(),
            elapsed: 0,
            info: null
        }

        console.log('start ticker')
        setInterval(this.tick.bind(this), 100)
    }

    tick () {
        let { started } = this.state
        let elapsed = Date.now() - started
        this.setState({ elapsed })
    }

    reset () {
        this.setState({
            started: Date.now(),
            elapsed: 0
        })
    }

    showInfo () {
        import('../Info').then(Info => {
            let info = <Info.default closeHandler={this.hideInfo.bind(this)} />
            this.setState({ info })
        })
    }

    hideInfo () {
        this.setState({ info: null })
    }

    render () {
        let { elapsed, info } = this.state
        return (
            <div className={styles.wrapper}>
                <p className={'color-primary'}>
                    {'up and running since '}
                    <ElapsedTime value={elapsed} />
                </p>
                <button onClick={() => this.reset()}>reset</button>
                {' | '}
                <button onClick={() => this.showInfo()}>info</button>
                {info}
            </div>
        )
    }
}

export default App
