import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import {add, changeDescription, search } from './todoActions'

class TodoFrom extends Component {
    constructor(props) {
        super(props)
        this.keyHandle = this.keyHandle.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandle(e) {
        const { add, search, description } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    render() {
        const { add, search, description } = this.props
        return (
            <div role='form' className='todoForm'>
                
                <Grid cols='12 9 10'>
                    <input id='description' 
                        className='form-control' 
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandle}
                        placeholder='Adicione uma tarefa' 
                        value={this.props.description} >
                    </input>
                </Grid>
        
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={() => add(description)}></IconButton>
                    <IconButton style='info' icon='search' onClick={() => search()}></IconButton>
                    <IconButton style='default' icon='close' onClick={this.props.handleClear}></IconButton>
                </Grid>
        
            </div>
        )
    }
}

const mapStateToProps = state => ({
  description: state.todo.description
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ add, changeDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoFrom)