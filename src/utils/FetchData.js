import { Component } from 'react';

// Apollo's <Query> component can't be used for fetching file tree because it works with
// simple graphql queries and I wouldn't be able to recursively fetch the whole tree.
// Here's somewhat naїve realization of same functionality
class FetchData extends Component {
  state = {
    isLoading: true,
    error: null,
    data: null
  };

  loadData() {
    const { loadFunction, setDataState, args } = this.props;
    this.setState({isLoading: true, data: null});
    loadFunction(args)
      .then(r => {
        this.setState({isLoading: false, data: r});
        // for lifting state up
        setDataState && setDataState({isLoading: false, data: r});
      })
  }

  componentDidMount = () =>
    this.loadData();

  componentDidUpdate(prevProps) {
    const { shouldUpdate, args } = this.props;
    if(shouldUpdate && shouldUpdate(prevProps.args, args)) {
      this.loadData()
    }
  }

  render () {
    const { children } = this.props;
    const { isLoading, error, data } = this.state;
    return children({isLoading, error, data});
  }
}

export default FetchData;