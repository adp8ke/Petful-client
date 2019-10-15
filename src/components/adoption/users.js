import React from 'react';

class Users extends React.Component{

  renderUsers(){

    const usersList = this.props.users.map((user, i) => {
      return(
        <div key={i} className={`user ${i === 0 && 'active-user'}`}>{user.name}</div>
      );
    });

    return usersList;
  }


  render(){

    if(this.props.users.length > 0){
      return (
        <section>
          <h2>People in line to adopt</h2>
          <div className='usersList'>{this.renderUsers()}</div>
        </section>
      );
    }

    else{
      return (
        <>
        </>
      );
    }
    
  }
}

export default Users;