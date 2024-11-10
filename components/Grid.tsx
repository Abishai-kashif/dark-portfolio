import { gridItems } from "../data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid>
                {gridItems.map((item) => {
                    const {
                        id,
                        title,
                        description,
                        className,
                        img,
                        imgClassName,
                        titleClassName,
                        spareImg,
                    } = item;
                    return (
                        <BentoGridItem
                            key={id}
                            title={title}
                            description={description}
                            id={id}
                            className={className}
                            img={img}
                            imgClassName={imgClassName}
                            titleClassName={titleClassName}
                            spareImg={spareImg}
                        />
                    );
                })}
            </BentoGrid>
        </section>
    );
};

export default Grid;
