import React from 'react';

const DisplayFiltered = props => {
  return (
    <div className='filterBody'>
      <div className='container'>
        <div className='row butter'>
          <div className='col-6'>
            <img alt='' className='img1' src={props.filtered.image} />
          </div>

          <div className='col-6 butter1'>
            <h2>{props.filtered.name}</h2>
            <p>{props.filtered.address}</p>
            <p>{props.filtered.theme}</p>
            <a href={props.filtered.url}>
              <p>{props.filtered.url}</p>
            </a>
            <p>{props.filtered.phone}</p>
            <button>Delete</button>
            <button>Add to favorites</button>
            <button>Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayFiltered;
