import { Component } from 'react';
import PropTypes from 'prop-types';

import { Controls } from '../Controls/Controls';
import { Progress } from '../Progress/Progress';
import { Publication } from '../Publication/Publication';

const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = { index: 0 };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  componentDidMount() {
    // if user fisrt time at your site = he will see the first publication
    // if not the first time  - he will see previous publication that he stopped / saved

    const savedPage = localStorage.getItem(LS_KEY);
    if (savedPage) {
      this.setState({ index: Number(savedPage) });
    }
  }

  componentDidUpdate(_, prevSate) {
    if (prevSate.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currentItem = items[index];

    return (
      <div>
        <Controls
          onChange={this.changeIndex}
          currentItem={index + 1}
          totalItem={totalItems}
        />
        <Progress current={index + 1} total={totalItems} />
        <Publication item={currentItem} />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
