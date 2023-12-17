import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

export interface SearchProps {
  onSearch: (searchText: string | undefined) => void;
}

const SearchInput = ({ onSearch }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        onSearch(searchRef.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          ref={searchRef}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
