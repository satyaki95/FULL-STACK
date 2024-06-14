import React from "react";

const user = [
  {
    fullName: "Satyaki Saha",
    age: 30,
    phones: [
      {
        home: "7894561230",
      },
      {
        office: "321654987",
      },
    ],
  },
  {
    fullName: "Guddu Saha",
    age: 20,
    phones: [
      {
        home: "8894561230",
      },
      {
        office: "421654987",
      },
    ],
  },
  {
    fullName: "Pappu Saha",
    age: 10,
    phones: [
      {
        home: "9894561230",
      },
      {
        office: "521654987",
      },
    ],
  },
  {
    fullName: "Babu Saha",
    age: 31,
    phones: [
      {
        home: "0894561230",
      },
      {
        office: "621654987",
      },
    ],
  },
];

const NESTED = () => {
  return (
    <div>
      {user.map((users, index) => (
        <article key={index}>
          <h3>{users.fullName}</h3>
          <p>{users.age}</p>
          <p>
            {users.phones.map((phone, index) => (
              <p key={index}>
                <h5>{phone.office}</h5>
                <h5>{phone.home}</h5>
              </p>
            ))}
          </p>
        </article>
      ))}
    </div>
  );
};

export default NESTED;
