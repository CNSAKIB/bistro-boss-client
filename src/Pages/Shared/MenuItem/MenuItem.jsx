
const MenuItem = ({ item }) => {
    const { image, recipe, name, price } = item;
    return (
        <div className="flex space-x-2">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name} -------------- </h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p className="text-yellow-400">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;