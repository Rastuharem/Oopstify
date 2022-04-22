import { connect } from "react-redux";
import React from "react";
import "../styles/SongTime.css";

class SongTime extends React.Component {
    render() {
        return (
            <div className="music-timer">
                <div
                    id="completed"
                    style={{
                        width: `${(this.props.currentLocation / this.props.duration) * 100}%`,
                    }}
                ></div>
                <span
                id="divider"
                tabIndex={0}
                style={{
                    left: `${(this.props.currentLocation / this.props.duration) * 100}%`,
                    }}>
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        duration: state.duration,
        currentLocation: state.currentLocation,
    };
};

export default connect(mapStateToProps)(SongTime);