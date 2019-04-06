import React, {Component} from "react";
import { connect } from "react-redux";
import { ListItem, List } from '@material-ui/core';
import { IBadge } from "../../../api/reducers/badges";
import { getBadges } from "../../../api/actions/badges/getBadges";

export interface IBadgesListerProps {
    error?: string,
    id?: string,
    badges: any
}

export interface IBadgesListerDispatchProps extends IBadgesListerProps {
    get: () => any
}


const styles: { list: React.CSSProperties} = {
    list: {
        display: 'flex',
    }
};

class BadgesLister extends Component<IBadgesListerDispatchProps> {
    componentDidMount(): void {
        const { get } = this.props;

        if (typeof get === 'function') get();
    }

    render() {
        const { badges } = this.props;

        return (
            <List>
                {
                    badges
                    && badges.badges.map(
                        ({
                             id,
                             score,
                             name
                        }: {
                            id: any,
                            score: any,
                            name: any
                        }) => (
                        <div key={id} style={styles.list}>
                            <ListItem>{name}</ListItem>
                            <ListItem>{score}</ListItem>
                        </div>
                    ))
                }
            </List>
        )
    }
}

const mapStateToProps = ({ badges }: IBadgesListerProps ) => ({
    badges: badges
});

const mapDispatchToProps = () => ({
    get: () => getBadges()
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BadgesLister);
