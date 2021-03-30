import React, { Component } from 'react';
import { Pagination, Container } from 'react-bootstrap';

class PaginationMethod extends Component {
  render() {
    return (
      <Container>
        <div>
          <Pagination className='justify-content-center' size='lg'>
            {/* <Pagination.First /> */}
            <Pagination.Prev />
            <Pagination.Item
              onClick={() => this.props.passingOnClickHandlerToChild(this.props.title,0)}
            >
              {0}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => this.props.passingOnClickHandlerToChild(this.props.title,5)}
            >
              {5}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => this.props.passingOnClickHandlerToChild(this.props.title,10)}
            >
              {10}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => this.props.passingOnClickHandlerToChild(this.props.title,15)}
            >
              {15}
            </Pagination.Item>
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Item>{25}</Pagination.Item>
            <Pagination.Item>{30}</Pagination.Item>
            <Pagination.Item>{35}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Next />
            {/* <Pagination.Last /> */}
          </Pagination>
        </div>
      </Container>
    );
  }
}

export default PaginationMethod;
