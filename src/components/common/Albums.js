import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import axios from 'axios';
import Album from './Album';

class Albums extends Component {

    state = {

        albums: []
    
    }

    componentDidMount() {
      debugger;
    
      axios.get(`https://rallycoding.herokuapp.com/api/music_albums`)
      .then(res => this.setState({

        albums: res.data

      }))
    }

    displayAlbums(){

        const {albums} = this.state;

        return albums.map(album =>
             <Album key={album.title} album={album} />
        )

    }
    
  render() {
    console.log(this.state);

      const {albums} = this.state;

    return (
      <ScrollView>
        {this.displayAlbums()}
      </ScrollView>
    )
  }
}

export default Albums;