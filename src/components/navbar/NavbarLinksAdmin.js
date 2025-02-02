// Chakra Imports
import {
    ButtonGroup,
    isLoading,
    Box,
    VStack,
    FormControl,
    FormLabel,
    InputGroup,
    InputRightElement,
    Input,
    Portal,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    useToast,
    Select,
    FormErrorMessage,
    FormHelperText,
    Avatar,
    Button,
    Flex,
    Icon,
    Image,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useColorModeValue,
    useColorMode,
    HStack,
} from "@chakra-ui/react";

// Custom Components
import { ItemContent } from "components/menu/ItemContent";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import { SidebarResponsive } from "components/sidebar/Sidebar";
import PropTypes from "prop-types";
import { Fragment } from "react";

import { useContext } from "react";
import React from "react";
import metaImage from "assets/img/walletLogos/MetaMask.png";
import solImage from "assets/img/walletLogos/Solana.png";
import wallConImage from "assets/img/walletLogos/WalletConnect.png";

// Assets
import navImage from "assets/img/layout/Navbar.png";
import { MdNotificationsNone, MdInfoOutline } from "react-icons/md";
import { IoMdMoon, IoMdSunny, IoMdWallet } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import routes from "routes.js";

function PasswordInput() {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return ( <
        InputGroup size = "md" >
        <
        Input pr = "4.5rem"
        type = { show ? "text" : "password" }
        placeholder = "Enter password"
        borderRadius = "16px" /
        >
        <
        InputRightElement width = "4.5rem"
        borderRadius = "16px" >
        <
        Button h = "1.75rem"
        size = "sm"
        onClick = { handleClick }
        borderRadius = "10px" > { " " } { show ? "Hide" : "Show" } { " " } <
        /Button>{" "} <
        /InputRightElement>{" "} <
        /InputGroup>
    );
}

function listButton(onClose, isOpen, onOpen) {
    return ( <
        Flex >
        <
        Menu >
        <
        div >
        <
        Box m = { 3 } >
        <
        Fragment >
        <
        Button onClick = { onOpen }
        variant = "brand" > { " " }
        List your Event { " " } <
        /Button>{" "} <
        Portal >
        <
        Modal isOpen = { isOpen }
        onClose = { onClose }
        isCentered size = "2xl" >
        <
        ModalContent as = "form" >
        <
        ModalBody >
        <
        VStack spacing = { 4 } >
        <
        FormControl id = "Email"
        isRequired >
        <
        Input placeholder = "Email"
        borderRadius = "16px" / >
        <
        /FormControl>{" "} { PasswordInput() } { " " } <
        /VStack>{" "} <
        /ModalBody>{" "} <
        ModalFooter >
        <
        ButtonGroup variant = "outline"
        spacing = "6" >
        <
        Button > Submit < /Button>{" "} <
        Button onClick = { onClose } > Cancel < /Button>{" "} <
        /ButtonGroup>{" "} <
        /ModalFooter>{" "} <
        /ModalContent>{" "} <
        /Modal>{" "} <
        /Portal>{" "} <
        /Fragment>{" "} <
        /Box>{" "} <
        /div>{" "} <
        /Menu>{" "} <
        /Flex>
    );
}

export default function HeaderLinks(props) {
    const { secondary } = props;
    const { colorMode, toggleColorMode } = useColorMode();
    // Chakra Color Mode
    const navbarIcon = useColorModeValue("gray.400", "white");
    let menuBg = useColorModeValue("white", "navy.800");
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const textColorBrand = useColorModeValue("brand.700", "brand.400");
    const ethColor = useColorModeValue("gray.700", "white");
    const borderColor = useColorModeValue("#E6ECFA", "rgba(135, 140, 189, 0.3)");
    const ethBg = useColorModeValue("secondaryGray.300", "navy.900");
    const ethBox = useColorModeValue("white", "navy.800");
    const shadow = useColorModeValue(
        "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
        "14px 17px 40px 4px rgba(112, 144, 176, 0.06)"
    );
    const borderButton = useColorModeValue("secondaryGray.500", "whiteAlpha.200");
    const { isOpen, onOpen, onClose } = useDisclosure();
    return ( <
        div >
        <
        Flex w = {
            { sm: "100%", md: "auto" } }
        alignItems = "center"
        flexDirection = "row"
        bg = { menuBg }
        flexWrap = { secondary ? { base: "wrap", md: "nowrap" } : "unset" }
        p = "10px"
        borderRadius = "30px"
        boxShadow = { shadow } >
        <
        SearchBar mb = { secondary ? { base: "10px", md: "unset" } : "unset" }
        me = "10px"
        borderRadius = "30px" /
        >
        <
        Flex bg = { ethBg }
        display = { secondary ? "flex" : "none" }
        borderRadius = "30px"
        ms = "auto"
        p = "6px"
        align = "center"
        me = "6px" >
        <
        Flex align = "center"
        justify = "center"
        bg = { ethBox }
        h = "29px"
        w = "29px"
        borderRadius = "30px"
        me = "7px" >
        <
        Icon color = { ethColor }
        w = "9px"
        h = "14px"
        as = { FaEthereum }
        />{" "} <
        /Flex>{" "} <
        Text w = "max-content"
        color = { ethColor }
        fontSize = "sm"
        fontWeight = "700"
        me = "6px" >
        1, 924 { " " } <
        Text as = "span"
        display = {
            { base: "none", md: "unset" } } > { " " }
        ETH { " " } <
        /Text>{" "} <
        /Text>{" "} <
        /Flex>{" "} <
        SidebarResponsive routes = { routes }
        />{" "} <
        Menu >
        <
        MenuButton p = "0px" >
        <
        Icon mt = "6px"
        as = { MdNotificationsNone }
        color = { navbarIcon }
        w = "18px"
        h = "18px"
        me = "10px" /
        >
        <
        /MenuButton>{" "} <
        MenuList boxShadow = { shadow }
        p = "20px"
        borderRadius = "20px"
        bg = { menuBg }
        border = "none"
        mt = "22px"
        me = {
            { base: "30px", md: "unset" } }
        minW = {
            { base: "unset", md: "400px", xl: "450px" } }
        maxW = {
            { base: "360px", md: "unset" } } >
        <
        Flex jusitfy = "space-between"
        w = "100%"
        mb = "20px" >
        <
        Text fontSize = "md"
        fontWeight = "600"
        color = { textColor } >
        Notifications { " " } <
        /Text>{" "} <
        Text fontSize = "sm"
        fontWeight = "500"
        color = { textColorBrand }
        ms = "auto"
        cursor = "pointer" >
        Mark all read { " " } <
        /Text>{" "} <
        /Flex>{" "} <
        Flex flexDirection = "column" >
        <
        MenuItem _hover = {
            { bg: "none" } }
        _focus = {
            { bg: "none" } }
        px = "0"
        borderRadius = "8px"
        mb = "10px" >
        <
        ItemContent info = "Horizon UI Dashboard PRO"
        aName = "Alicia" / >
        <
        /MenuItem>{" "} <
        MenuItem _hover = {
            { bg: "none" } }
        _focus = {
            { bg: "none" } }
        px = "0"
        borderRadius = "8px"
        mb = "10px" >
        <
        ItemContent info = "Horizon Design System Free"
        aName = "Josh Henry" /
        >
        <
        /MenuItem>{" "} <
        /Flex>{" "} <
        /MenuList>{" "} <
        /Menu>{" "} <
        Menu >
        <
        MenuButton p = "0px" >
        <
        Icon mt = "6px"
        as = { MdInfoOutline }
        color = { navbarIcon }
        w = "18px"
        h = "18px"
        me = "10px" /
        >
        <
        /MenuButton>{" "} <
        MenuList boxShadow = { shadow }
        p = "20px"
        me = {
            { base: "30px", md: "unset" } }
        borderRadius = "20px"
        bg = { menuBg }
        border = "none"
        mt = "22px"
        minW = {
            { base: "unset" } }
        maxW = {
            { base: "360px", md: "unset" } } >
        <
        Image src = { navImage }
        borderRadius = "16px"
        mb = "28px" / >
        <
        Flex flexDirection = "column" >
        <
        Link w = "100%"
        href = "https://horizon-ui.com/pro" >
        <
        Button w = "100%"
        h = "44px"
        mb = "10px"
        variant = "brand" >
        Buy Horizon UI PRO { " " } <
        /Button>{" "} <
        /Link>{" "} <
        Link w = "100%"
        href = "https://horizon-ui.com/documentation/docs/introduction" >
        <
        Button w = "100%"
        h = "44px"
        mb = "10px"
        border = "1px solid"
        bg = "transparent"
        borderColor = { borderButton } >
        See Documentation { " " } <
        /Button>{" "} <
        /Link>{" "} <
        Link w = "100%"
        href = "https://github.com/horizon-ui/horizon-ui-chakra" >
        <
        Button w = "100%"
        h = "44px"
        variant = "no-hover"
        color = { textColor }
        bg = "transparent" >
        Try Horizon Free { " " } <
        /Button>{" "} <
        /Link>{" "} <
        /Flex>{" "} <
        /MenuList>{" "} <
        /Menu>{" "} <
        Button variant = "no-hover"
        bg = "transparent"
        p = "0px"
        minW = "unset"
        minH = "unset"
        h = "18px"
        w = "max-content"
        onClick = { toggleColorMode } >
        <
        Icon me = "10px"
        h = "18px"
        w = "18px"
        color = { navbarIcon }
        as = { colorMode === "light" ? IoMdMoon : IoMdSunny }
        />{" "} <
        /Button>{" "} <
        Menu >
        <
        MenuButton p = "0px" >
        <
        Icon mt = "6px"
        as = { IoMdWallet }
        color = { navbarIcon }
        w = "18px"
        h = "18px"
        me = "10px" /
        >
        <
        /MenuButton>{" "} <
        MenuList boxShadow = { shadow }
        p = "0px"
        mt = "10px"
        borderRadius = "20px"
        bg = { menuBg }
        border = "none" >
        <
        Flex w = "100%"
        mb = "0px" >
        <
        Text ps = "30px"
        pt = "16px"
        pb = "10px"
        w = "100%"
        borderBottom = "1px solid"
        borderColor = { borderColor }
        fontSize = "sm"
        fontWeight = "600"
        textAlign = "left"
        color = { textColor } >
        Connect with { " " } <
        /Text>{" "} <
        /Flex>{" "} <
        Flex flexDirection = "column"
        p = "10px" >
        <
        MenuItem _hover = {
            { bg: "none" } }
        _focus = {
            { bg: "none" } }
        borderRadius = "8px"
        px = "14px" >
        <
        Image boxSize = "42px"
        padding = "3px"
        objectFit = "cover"
        src = { metaImage }
        />{" "} <
        Text fontSize = "sm" > MetaMask < /Text>{" "} <
        /MenuItem>{" "} <
        MenuItem _hover = {
            { bg: "none" } }
        _focus = {
            { bg: "none" } }
        borderRadius = "8px"
        px = "14px" >
        <
        Image boxSize = "45px"
        objectFit = "cover"
        src = { solImage }
        />{" "} <
        Text fontSize = "sm" > Solana < /Text>{" "} <
        /MenuItem>{" "} <
        MenuItem _hover = {
            { bg: "none" } }
        _focus = {
            { bg: "none" } }
        borderRadius = "8px"
        px = "14px" >
        <
        Image boxSize = "45px"
        objectFit = "scale-down"
        src = { wallConImage }
        />{" "} <
        Text fontSize = "sm" > WalletConnect < /Text>{" "} <
        /MenuItem>{" "} <
        /Flex>{" "} <
        /MenuList>{" "} <
        /Menu>{" "} <
        Menu >
        <
        MenuButton p = "0px" >
        <
        Avatar _hover = {
            { cursor: "pointer" } }
        color = "white"
        name = "Adela Parkson"
        bg = "#11047A"
        size = "sm"
        w = "40px"
        h = "40px" /
        >
        <
        /MenuButton>{" "} <
        MenuList boxShadow = { shadow }
        p = "0px"
        mt = "10px"
        borderRadius = "20px"
        bg = { menuBg }
        border = "none" >
        <
        Flex w = "100%"
        mb = "0px" >
        <
        Text ps = "20px"
        pt = "16px"
        pb = "10px"
        w = "100%"
        borderBottom = "1px solid"
        borderColor = { borderColor }
        fontSize = "sm"
        fontWeight = "700"
        color = { textColor } >
        👋 & nbsp; Hey, Adela { " " } <
        /Text>{" "} <
        /Flex>{" "} <
        Flex flexDirection = "column"
        p = "10px" >
        <
        MenuItem _hover = {
            { bg: "none" } }
        _focus = {
            { bg: "none" } }
        borderRadius = "8px"
        px = "14px" >
        <
        Text fontSize = "sm" > Profile Settings < /Text>{" "} <
        /MenuItem>{" "} <
        MenuItem _hover = {
            { bg: "none" } }
        _focus = {
            { bg: "none" } }
        borderRadius = "8px"
        px = "14px" >
        <
        Text fontSize = "sm" > Newsletter Settings < /Text>{" "} <
        /MenuItem>{" "} <
        /Flex>{" "} <
        /MenuList>{" "} <
        /Menu>{" "} <
        Flex > { listButton(onClose, isOpen, onOpen) } < /Flex>{" "} <
        /Flex>{" "} <
        /div>
    );
}

HeaderLinks.propTypes = {
    variant: PropTypes.string,
    fixed: PropTypes.bool,
    secondary: PropTypes.bool,
    onOpen: PropTypes.func,
};