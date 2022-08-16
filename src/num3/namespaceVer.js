var RecentChangesTable = React.createClass({
    render: function() {
    return <table>
              this.props.children
              </table>;
              
    }
    
  });  
  
    
  RecentChangesTable.Headings = React.createClass({
      render: function(){
      var headings = this.props.headings.map(function(name) {
        return( <RecentChangesTable.Heading heading = {name}/>);
  });
    
      return (<thead><tr>{headings}</tr></thead>);   
      }
    });
  
  
  
  RecentChangesTable.Heading = React.createClass({
    render: function(){
      
  
       return (<th>{this.props.headings}</th>);   
    }
  });
  
  
  
  RecentChangesTable.Rows = React.createClass({
    render: function() {
      var rows = this.props.changeSets.map(function(changeSet) {
      return(<RecentChangesTable.Row changeSet = {changeSet}/>);
        
  });
    return(<tbody>{rows}</tbody>);
    }
  }); 
  
  
  var App = React.createClass({
    render: function() {
     return (<RecentChangesTable>
              <{RecentChangesTable.Headings headings = {this.props.headings} />
              <RecentChangesTable.Rows changeSet = {this.props.changeSet} />
            </RecentChangesTable>;  
    }
  });
  
  
  var data = [{"when":"2 minutes ago",
               "who": "Jill Dupre",
               "description": "Created new account"
          },
          
          {
              "when": "1 hour ago",
              "who" : "Lose White",
              "description": "Added fist chapter"
          },
          
          {
              "when": "2 hour ago",
              "who" : "Jordan Whash",
              "description": "Created new account"
          }];
          
  
  var headings = ['When', 'Who', 'Description'];
  
  
  React.render(<App headings={headings} changeSet= {data}/>, document.getElementById('cointainer'));