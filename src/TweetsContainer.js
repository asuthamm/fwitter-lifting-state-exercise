import React, { Component } from 'react'
import TweetList from './TweetList'
import UserList from './UserList'
import { users } from './data/data'

class TweetsContainer extends Component {
  state = {
    users: users,
    currentUser: {}
  }

  retrieveUserId = (id) => {
    this.filterTweets(id)
  }

  filterTweets = (id) => {
    let seletedUser = this.state.users.filter(user => user.id === id)
    this.setState({currentUser: seletedUser[0]} )
  }

  handleTweetLike = (likedUser, tweetId) => {
    let updatedUsers = this.state.users.map(user => {
      if(user === likedUser){
        let likedTweet = user.tweets.find(tweet => tweet.id === tweetId)
        likedTweet.favorite_count +=1
      }
      return user
    })
    this.setState({users: updatedUsers})
  }
  render() {
    return (
      <div className="ui main container">
        <div className="ui grid">
          <div className="six wide column">
            <h2 className="ui header">Users</h2>
            <UserList 
              users={this.state.users} 
              retrieveUserId = {this.retrieveUserId}
            />
          </div>
          <div className="ten wide column">
            <h2 className="ui header">Tweets</h2>
            <TweetList 
              user={this.state.currentUser.id ? this.state.currentUser: this.state.users[0]} 
              handleTweetLike = {this.handleTweetLike} 
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TweetsContainer