import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsCaretDownFill, BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { Menu, MenuButton, Button, MenuItem, MenuList, VStack, HStack } from "@chakra-ui/react";
import styles from "../styles/Checkout.module.css";

const Checkout = () => {
  const [state, setState] = useState({
    size: null,
    qty: 1,
  });

  const stars = [...Array(5)].map((star, index) => (
    <AiOutlineStar key={index} size={15} />
  ));

  const fillCart = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
    console.log(state)
  };

  return (
    <div>
      <h3>Checkout Module</h3>
      <p className={styles.reviews}>{stars} (0)</p>
      <VStack>
        <p>$56</p>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsCaretDownFill />}>{state.size ? `size ${state.size}` : "size"}</MenuButton>
          <MenuList>
            <MenuItem onClick={fillCart} name="size" value={28}>28</MenuItem>
            <MenuItem onClick={fillCart} name="size" value={30}>30</MenuItem>
            <MenuItem onClick={fillCart} name="size" value={32}>32</MenuItem>
            <MenuItem onClick={fillCart} name="size" value={34}>34</MenuItem>
          </MenuList>
        </Menu>
        <HStack>
          <label for="qty">qty </label>
          <input className={styles.numberInput} id="qty" style={{ width: "50px" }} name="qty" type="number" value={state.qty} min={0} onChange={fillCart} /><VStack><BsArrowUpShort /><BsArrowDownShort /></VStack>
        </HStack>
        <Button>checkout</Button>
      </VStack>
    </div>
  )
};

export default Checkout;
