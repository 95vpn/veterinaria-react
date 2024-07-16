import React from 'react';

const FormUser = () => {
  return (
    <div>FormUser
        <form action="">
            <div>
                <label htmlFor="owner_name">owner_name</label>
                <input id='owner_name' type="text" />
            </div>
            <div>
                <label htmlFor="owner_lastName">owner_lastName</label>
                <input id='owner_lastName' type="text" />
            </div>
            <div>
                <label htmlFor="address">address</label>
                <input id='address' type="text" />
            </div>
            <div>
                <label htmlFor="phone">phone</label>
                <input id='phone' type="text" />
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input id='email' type="email" />
            </div>
            <div>
                <label htmlFor="data">data</label>
                <input id='data' type="date" />
            </div>
            <div>
                <label htmlFor="name">name</label>
                <input id='name' type="text" />
            </div>
            <div>
                <label htmlFor="species">species</label>
                <input id='species' type="text" />
            </div>
            <div>
                <label htmlFor="breed">breed</label>
                <input id='breed' type="text" />
            </div>
            <div>
                <label htmlFor="age">age</label>
                <input id='age' type="text" />
            </div>
            <div>
                <label htmlFor="weight">weight</label>
                <input id='weight' type="text" />
            </div>
            <div>
                <label htmlFor="vaccinated">vaccinated</label>
                <input id='vaccinated' type="select" />
            </div>
            <div>
                <label htmlFor="weight">weight</label>
                <textarea name="weight" id="weight"></textarea>
            </div>
        </form>
    </div>
  )
}

export default FormUser;