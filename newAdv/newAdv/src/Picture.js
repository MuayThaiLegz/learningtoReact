import React from 'react'
import { Cats, PictureModel } from './models';

const Picture = React.createClass({
  render() {
    return (
        <div>
          <img src={Cats.get(this.props.params.id).get('src')} style={{ height: '90%' }} />
        </div>
    )
  }
});

export {Picture as default}
