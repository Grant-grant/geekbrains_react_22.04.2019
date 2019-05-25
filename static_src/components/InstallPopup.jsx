import React from 'react';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import '../styles/popup.scss';


class InstallPopup extends React.Component {
    state = {
        isShown: false,
    };
    
    const isIos = () => {
           const userAgent = window.navigator.userAgent.toLowerCase();
           return /iphone|ipad|ipod/.test( userAgent );
       };
  
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
     
    if (isIos() && !isInStandaloneMode()) {
           this.setState({ isShown: true }); // На примере React
    }

    componentDidMount() {
        // Detects if device is on iOS
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test( userAgent );
        };
        // Detects if device is in standalone mode
        const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

        // Checks if should display install popup notification:
        if (isIos() && !isInStandaloneMode()) {
            this.handleShow();
        }
    }

    handleShow = () => {
        this.setState({ isShown: true });
    };

    handleHide = () => {
        this.setState({ isShown: false });
    };

    render() {
        return (
            <div style={ { display: this.state.isShown ? 'block' : 'none' } } className="speech-bubble-container">
                <div className="speech-bubble">
                    <Cancel className="close-install-message-icon" onClick={ this.handleHide } />
                    <div style={ { paddingRight: '15px' } }>Установи приложение на свой iPhone</div>
                </div>
            </div>
        );
    }
}

export default InstallPopup;
