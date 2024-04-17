import styled from "styled-components";

export const TableContainer = styled.table`
  margin-top: 2rem;
  width: 100%;
  border-radius: 8px;
  border-collapse:  separate;
  border: 1px solid ${props => props.theme['gray-300']};
  border-spacing: 0px;


  th, td { 
    padding: 1rem;
    border-top:solid  1px ${props => props.theme['gray-300']};
    text-align: left;
  }

  th{
    border-top: none;
 
  }

  tr:first-child {
    th:first-child {
      border-top-left-radius: 8px;
    }
    th:last-child {
      border-top-right-radius: 8px;
    }
  }

  tr:last-child {
    td:first-child {
      border-bottom-left-radius: 8px;
    }
    td:last-child {
      border-bottom-right-radius: 8px;
    }
  }
  



  tr:hover {
    background-color: ${props => props.theme['gray-700']};
  }




`;