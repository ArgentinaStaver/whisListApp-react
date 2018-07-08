import React, { Component } from 'react';

class ProfilePage extends Component {
    render() {
        return(
            <section className="section-md bg-white text-center">
                <div className="shell">
                    <hr />
                    <h4>Make your event here</h4>
                    <p className="spacing-50">Create your event and your list of wishes</p>
                    <div className="group-xl">
                        <div className="button button-circle button-primary button-shadow">Creaza un eveniment</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProfilePage;