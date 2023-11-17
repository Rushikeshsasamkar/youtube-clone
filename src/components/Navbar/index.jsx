import { Octicon, Header, Avatar } from "@primer/react";
import { VideoIcon } from '@primer/octicons-react';
import '../../public/Searchbar.css';

const Navbar = (props) => {
    return (
        <Header className="nav" sx={{ backgroundColor: 'white', color: 'black', position: 'sticky', top: 0, zIndex: 100 }}>
            <Header.Item>
                <Header.Link href="#" fontSize={2} sx={{ color: 'black' }}>
                    <VideoIcon size={24} sx={{ color: 'red' }} /> &nbsp; &nbsp;
                    <span>Youtube</span>
                </Header.Link>
            </Header.Item>
            <Header.Item full></Header.Item>
            <Header.Item sx={{ mr: 0 }}>
                <Avatar src="https://github.com/octocat.png" size={20} square alt="@octocat" />
            </Header.Item>
        </Header>
    );
}

export default Navbar;
