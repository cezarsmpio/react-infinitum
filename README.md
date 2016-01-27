# React Infinitum

> React Infinitum is a __window__ infinite scroll loader

## Install

```
npm install --save react-infinitum
```

## Usage

```javascript
import React from 'react';
import Infinitum from 'react-infinitum';

let fakeData = [
  {city: 'Curitiba', country: 'Brazil'},
  {city: 'New York', country: 'United States'},
  {city: 'Tokyo', country: 'Japan'}
];

class Feeds extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: fakeData,
      loadMore: true
    };
  }

  loadMoreCities() {
    // Set loadMore to false and ReactInfinitum will be blocked
    this.setState({
      loadMore: false
    });

    // Simulate an AJAX request
    ajax.get('/cities')
      .then(res => {
        this.setState({
          cities: this.state.cities.concat(res),
          loadMore: true
        });
      })
      .catch(() => {
        // No more cities
        this.setState({
          loadMore: false
        });
      });
  }

  render() {
    return (
      <Infinitum onReachBottom={this.loadMoreCities.bind(this)} loadMore={this.state.loadMore}>
        {this.state.cities.map((city, i) => {
          return (
            <div key={i}>
              <p>{city.city}</p>
              <p>{city.country}</p>
            </div>
          );
        })}
      </Infinitum>
    );
  }
}

export default Feeds;
```

## Properties

Name|Type|Required?|Default Value|Description
----|----|---------|-------------|-----------
`onReachBottom`|`function`|Yes|-|The callback that will be fired when window reach the page bottom
`loadMore`|`boolean`|No|`true`|The flag that indicate if will call the callback
`trigger`|`number`|No|0.85|A number between 0 - 1 that indicate the window scroll percentage to reach on page bottom