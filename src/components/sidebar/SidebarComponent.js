import React from 'react';
import { Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import LogoComponent from './LogoComponent';
import MenuItemComponent from './MenuItemComponent';
import IconOverview from '../../assets/icons/icon-overview.js';
//import IconTickets from '../../assets/icons/icon-tickets.js';
import IconIdeas from '../../assets/icons/icon-ideas.js';
//import IconContacts from '../../assets/icons/icon-contacts';
// import IconAgents from '../../assets/icons/icon-agents';
 import IconArticles from '../../assets/icons/icon-articles';
 import IconSettings from '../../assets/icons/icon-settings';
// import IconSubscription from '../../assets/icons/icon-subscription';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#363740',
        width: 255,
        paddingTop: 32
    },
    menuItemList: {
        marginTop: 52
    },
    separator: {
        borderTop: '1px solid #DFE0EB',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent(props) {
    return (
        <Column className={css(styles.container)}>
            <LogoComponent />
            <Column className={css(styles.menuItemList)}>
                <MenuItemComponent
                    title="Manage Quarter" icon={IconOverview}
                    onClick={() => props.onChange('Manage Quarter')}
                    active={props.selectedItem === 'Manage Quarter'}
                />
                <MenuItemComponent
                    title="Input Wizard" icon={IconSettings}
                    onClick={() => props.onChange('Input Wizard')}
                    active={props.selectedItem === 'Input Wizard'}
                />
                <MenuItemComponent
                    title="Dashboard" icon={IconIdeas}
                    onClick={() => props.onChange('Dashboard')}
                    active={props.selectedItem === 'Dashboard'} />
                <MenuItemComponent
                    title="Reports" icon={IconArticles}
                    onClick={() => props.onChange('Reports')}
                    active={props.selectedItem === 'Reports'} />
                {/* <MenuItemComponent
                    title="Agents" icon={IconAgents}
                    onClick={() => props.onChange('Agents')}
                    active={props.selectedItem === 'Agents'} /> */}
                {/* <MenuItemComponent
                    title="Articles" icon={IconArticles}
                    onClick={() => props.onChange('Articles')}
                    active={props.selectedItem === 'Articles'} />
                <div className={css(styles.separator)}></div> */}
                {/* <MenuItemComponent
                    title="Settings" icon={IconSettings}
                    onClick={() => props.onChange('Settings')}
                    active={props.selectedItem === 'Settings'} /> */}
                {/* <MenuItemComponent
                    title="Subscription" icon={IconSubscription}
                    onClick={() => props.onChange('Subscription')}
                    active={props.selectedItem === 'Subscription'} /> */}
            </Column>
        </Column>
    );
}

export default SidebarComponent;