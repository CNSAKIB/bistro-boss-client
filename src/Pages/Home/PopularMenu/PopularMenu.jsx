import { useEffect, useState } from "react";
import Sectiontitle from "../../../component/SectionTitle/Sectiontitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const populerItem = data.filter(item => item.category === 'popular');
                setMenu(populerItem)
            }
            )


    }, [])
    return (
        <section className="mb-12 ">
            <Sectiontitle
                subHeading="Check it out"
                heading="From our menu"
            ></Sectiontitle>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >

                    </MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;