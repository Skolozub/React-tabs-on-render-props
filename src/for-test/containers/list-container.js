import React, { Component } from "react";
import axios from "axios";
import { List } from "../components/list";

export class ListContainer extends Component {
  state = {
    list: [],
    isLoading: false
  };

  componentDidMount = async () => {
    const { search } = this.props;
    this.setState({ isLoading: true });
    const {
      data: { results }
    } = await this.fetchList(search);

    this.setState({ list: results, isLoading: false });
  };

  fetchList = async search => await axios.get(`/people${search}`);

  render = () => (
    <List list={this.state.list} isLoading={this.state.isLoading} />
  );
}
