import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import LogoComponent from './LogoComponent';
import MenuItemComponent from './MenuItemComponent';
import IconOverview from '../../assets/icons/icon-overview.js';
//import IconTickets from '../../assets/icon-tickets.js';
import IconIdeas from '../../assets/icons/icon-ideas.js';
//import IconContacts from '../../assets/icon-contacts';
//import IconAgents from '../../assets/icon-agents';
import IconArticles from '../../assets/icons/icon-articles';
import IconSettings from '../../assets/icons/icon-settings';
import IconSubscription from '../../assets/icons/icon-subscription';
import IconBurger from '../../assets/icons/icon-burger';

const styles = StyleSheet.create({
    burgerIcon: {
        cursor: 'pointer',
        position: 'absolute',
        left: 24,
        top: 34
    },
    container: {
        backgroundColor: '#363740',
        width: 255,
        paddingTop: 32,
        height: 'calc(100% - 32px)'
    },
    containerMobile: {
        transition: 'left 0.5s, right 0.5s',
        position: 'absolute',
        width: 255,
        height: 'calc(100% - 32px)',
        zIndex: 901
    },
    mainContainer: {
        height: '100%',
        minHeight: '100vh'
    },
    mainContainerMobile: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        top: 0,
        left: 0
    },
    menuItemList: {
        marginTop: 52
    },
    outsideLayer: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.50)',
        zIndex: 900
    },
    separator: {
        borderTop: '1px solid #DFE0EB',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    },
    hide: {
        left: -255
    },
    show: {
        left: 0
    }
});

class SidebarComponent extends React.Component {

    state = { expanded: false };

    onItemClicked = (item) => {
        this.setState({ expanded: false });
        return this.props.onChange(item);
    }

    isMobile = () => window.innerWidth <= 768;

    toggleMenu = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

    renderBurger = () => {
        return <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
            <IconBurger />
        </div>
    }

    render() {
        const { expanded } = this.state;
        const isMobile = this.isMobile();
        return (
            <div style={{ position: 'relative' }}>
                <Row className={css(styles.mainContainer)} breakpoints={{ 768: css(styles.mainContainerMobile) }}>
                    {(isMobile && !expanded) && this.renderBurger()}
                    <Column className={css(styles.container)} breakpoints={{ 768: css(styles.containerMobile, expanded ? styles.show : styles.hide) }}>
                        <LogoComponent />
                        <Column className={css(styles.menuItemList)}>
                            <MenuItemComponent
                                title="Manage Quarter" icon={IconOverview}
                                onClick={() => this.onItemClicked('Manage Quarter')}
                                active={this.selectedItem === 'Manage Quarter'}
                            />
                            <MenuItemComponent
                                title="Input Wizard" icon={IconSettings}
                                onClick={() => this.onItemClicked('Input Wizard')}
                                active={this.selectedItem === 'Input Wizard'}
                            />
                            <MenuItemComponent
                                title="Dashboard" icon={IconIdeas}
                                onClick={() => this.onItemClicked('Dashboard')}
                                active={this.selectedItem === 'Dashboard'} />
                            <MenuItemComponent
                                title="Reports" icon={IconArticles}
                                onClick={() => this.onItemClicked('Reports')}
                                active={this.selectedItem === 'Reports'} />
                            <MenuItemComponent
                                title="About" icon={IconSubscription}
                                onClick={() => this.onItemClicked('About')}
                                active={this.props.selectedItem === 'About'}
                            />
                           
                        </Column>
                    </Column>
                    {isMobile && expanded && <div className={css(styles.outsideLayer)} onClick={this.toggleMenu}></div>}
                </Row>
            </div>
        );
    };
}

export default SidebarComponent;




