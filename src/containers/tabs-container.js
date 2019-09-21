import { Component } from "react";
import { decodeGetParams, encodeGetParams } from "../functions";

export class TabsContainer extends Component {
  state = {
    params: {}
  };

  setTab = tabKey => {
    const { tabsName = "tab" } = this.props;

    this.setState(({ params: prevParams }) => ({
      params: { ...prevParams, [tabsName]: String(tabKey) }
    }));
  };

  setParams = search => {
    const params = decodeGetParams(search);

    this.setState(({ params: prevParams }) => ({
      params: { ...prevParams, ...params }
    }));
  };

  componentDidMount = () => {
    const { activeTabKey = "0", location, withparams } = this.props;

    this.setTab(activeTabKey);
    if (withparams) this.setParams(location.search);
  };

  componentDidUpdate = prevProps => {
    const { location, withparams } = this.props;

    if (!withparams) return null;

    const paramsHasChanged = prevProps.location.search !== location.search;
    if (paramsHasChanged) this.setParams(location.search);
  };

  render = () => {
    const { params } = this.state;
    const {
      children,
      location = {},
      withparams,
      tabsName = "tab"
    } = this.props;
    const encodedSearch = encodeGetParams(params);

    return children({
      params,
      search: encodedSearch,
      withparams,
      tabsName,
      location,
      setTab: this.setTab
    });
  };
}
