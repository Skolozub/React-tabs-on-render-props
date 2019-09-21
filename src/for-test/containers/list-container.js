import React, { Component } from "react";
import axios from "axios";
import { List } from "../components/list";

export class ListContainer extends Component {
  state = {
    list: [],
    isLoading: false
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    const { data } = await this.fetchList(this.props.search);

    this.setState({ list: data.results, isLoading: false });
  };

  fetchList = async search => axios.get(`/people${search}`);

  render = () => (
    <List list={this.state.list} isLoading={this.state.isLoading} />
  );
}
