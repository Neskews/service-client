import React, { Component } from "react";
import { connect } from "react-redux";
import {
  SwipeableDrawer,
  List,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Divider
} from "@material-ui/core";
import { Menu, People, Add } from "@material-ui/icons";
import {
  Item,
  Content,
  PersonAdder,
  PeopleLister,
  OfferAdder,
  BadgesLister
} from "./components";
import { CHANGE_VIEW } from "./api/types";
import Landing from "./components/Landing";

const views = {
  addPerson: "add-person",
  listPeople: "list-people",
  addOffer: "add-offer",
  listBadges: "list-badges"
};

class App extends Component {
  state = {
    isOpen: false
  };

  onOpen = () => this.setState({ isOpen: true });

  onClose = () => this.setState({ isOpen: false });

  changeView = view => {
    const { changeView } = this.props;

    this.onClose();

    if (typeof changeView === "function") {
      changeView(view);
    }
  };

  render() {
    const { view, process } = this.props;
    const { isOpen } = this.state;

    console.log(process);

    if (process === "landing") return <Landing />;

    return (
      <div>
        <AppBar>
          <Toolbar>
            <IconButton onClick={this.onOpen}>
              <Typography>
                <Menu />
              </Typography>
            </IconButton>
            Service Online Buchen
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={isOpen}
          onClose={this.onClose}
          onOpen={this.onClose}
        >
          <List>
            <Item
              onClick={() => this.changeView(views.addPerson)}
              label={"Person hinzufügen"}
              icon={<Add />}
            />
            <Item
              onClick={() => this.changeView(views.listPeople)}
              label={"Personen anzeigen"}
              icon={<People />}
            />
            <Divider />
            <Item
              onClick={() => this.changeView(views.addOffer)}
              label={"Angebot hinzufügen"}
              icon={<Add />}
            />
            <Divider />
            <Item
              onClick={() => this.changeView(views.listBadges)}
              label={"Badges anzeigen"}
              icon={<Add />}
            />
          </List>
        </SwipeableDrawer>
        <Content>
          {view === views.addPerson && <PersonAdder />}
          {view === views.listPeople && <PeopleLister />}
          {view === views.addOffer && <OfferAdder />}
          {view === views.listBadges && <BadgesLister />}
        </Content>
      </div>
    );
  }
}

const mapStateToProps = ({ view, process }) => ({
  view: view.view,
  process
});

const mapDispatchToProps = dispatch => ({
  changeView: view =>
    dispatch({
      type: CHANGE_VIEW,
      payload: view
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
