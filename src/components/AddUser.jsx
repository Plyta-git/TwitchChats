import styled from "styled-components";

const Button = styled.button`
  margin: 10px;
  background-color: #fff;
  border: 2px solid #000;
  color: #000;
  cursor: pointer;
  fill: #000;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  justify-content: center;
  letter-spacing: -0.8px;
  line-height: 24px;
  min-width: 140px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  touch-action: manipulation;

  &:focus {
    color: #171e29;
  }

  &:hover {
    border-color: #f0f1f3;
    color: #171e29;
    fill: #f0f1f3;
  }

  &:active {
    color: #f0f1f3;
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 15px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddUser = () => {
  return (
    <Wrapper>
      <Flex>
        <input></input>
        <Button>ADD USER</Button>
      </Flex>
    </Wrapper>
  );
};

export default AddUser;
