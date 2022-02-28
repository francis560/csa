export function NextArrow(props) {

    const { onClick } = props;

    return (
        <i onClick={onClick} class="uil uil-angle-right bg-white rounded-full px-1 mx-4 text-xl cursor-pointer"></i>
    );
}

export function PrevArrow(props) {

    const { onClick } = props;

    return (
        <i onClick={onClick} class="uil uil-angle-left bg-white rounded-full px-1 mx-4 text-xl cursor-pointer"></i>
    );
}