import React, { useState } from "react";
import "./Search_ambu_bar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return (value.hospitalName.toLowerCase().includes(searchWord.toLowerCase())+value.city.toLowerCase().includes(searchWord.toLowerCase()));
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <>
        <Box
        className="search"
        sx={{
          display:{xs:'none',md:'block'}
        }}>
          <div className="searchInputs">
            <input
              type="text"
              placeholder={placeholder}
              value={wordEntered}
              onChange={handleFilter}
            />
            <div className="searchIcon">
              {filteredData.length === 0 ? (
                <SearchIcon />
              ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
              )}
            </div>
          </div>
          {filteredData.length !== 0 && (
            <div className="dataResult">
              {filteredData.slice(0, 15).map((value) => {
                return (
                  <a className="dataItem"  href={value.link}  target="blank">
                    <p>
                      <span style={{fontWeight: 'bold'}}>Hospital Name:  </span>{value.hospitalName},
                      <span style={{fontWeight: 'bold'}}> City:  </span>{value.city},
                      <span style={{fontWeight: 'bold'}}> Current Number Of Ambulance:  </span>{value.NumberOfAmbulance},
                      <span style={{fontWeight: 'bold'}}> Contact Number:  </span>{value.contact},
                    </p>
                  </a>
                );
              })}
            </div>
          )}
        </Box>

{/* .............................................................................................................. */}
{/* ..........................................Mobile View......................................................... */}
{/* .............................................................................................................. */}

<Box 
className="mobilesearch"
sx={{
  display:{xs:'block',md:'none'}
}}>
          <div className="mobilesearchInputs">
            <input
              type="text"
              placeholder={placeholder}
              value={wordEntered}
              onChange={handleFilter}
            />
            <div className="mobilesearchIcon">
              {filteredData.length === 0 ? (
                <SearchIcon />
              ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
              )}
            </div>
          </div>
          {filteredData.length !== 0 && (
            <div className="mobiledataResult">
              {filteredData.slice(0, 15).map((value) => {
                return (
                  <a className="mobiledataItem"  href={value.link}  target="blank">
                    <p>
                      <span style={{fontWeight: 'bold'}}>Hospital Name:  </span>{value.hospitalName},
                      <span style={{fontWeight: 'bold'}}> City:  </span>{value.city},
                      <span style={{fontWeight: 'bold'}}> Current Number Of Ambulance:  </span>{value.NumberOfAmbulance},
                      <span style={{fontWeight: 'bold'}}> Contact Number:  </span>{value.contact}
                    </p>
                  </a>
                );
              })}
            </div>
          )}
        </Box>

    </>
  );
}

export default SearchBar;