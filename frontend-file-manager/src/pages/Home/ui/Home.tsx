import cls from './Home.module.scss'
import clsx from "clsx";
import {SearchInput} from "../../../shared/ui/Input";
import {getFilesMutation} from "../../../entities/File/model/fileModel";
import {Button} from "../../../shared/ui/Button";

interface IHomeProps {
    className?: string
}

const Home = (props: IHomeProps) => {
    const {className} = props;

    return (
        <div className={clsx(cls.home, className)}>
            {}
        </div>
    );
};

export default Home;