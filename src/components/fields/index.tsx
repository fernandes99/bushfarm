import field_empty from "../../assets/img/field_empty.svg";
import field_bellpepper_mature from "../../assets/img/field_bellpepper_mature.svg";
import field_bellpepper_growing from "../../assets/img/field_bellpepper_growing.svg";
import field_tomato_mature from "../../assets/img/field_tomato_mature.svg";
import field_tomato_growing from "../../assets/img/field_tomato_growing.svg";
import field_carrot_mature from "../../assets/img/field_carrot_mature.svg";
import field_carrot_growing from "../../assets/img/field_carrot_growing.svg";
import field_beet_mature from "../../assets/img/field_beet_mature.svg";
import field_beet_growing from "../../assets/img/field_beet_growing.svg";

export const fields = {
    empty: () => <img src={field_empty} alt="Field empty" />,

    tomato: {
        growing: () => <img src={field_tomato_growing} alt="Tomato growing" />,
        mature: () => <img src={field_tomato_mature} alt="Tomato mature" />
    },

    bellPepper: {
        growing: () => <img src={field_bellpepper_growing} alt="Bell Pepper growing" />,
        mature: () => <img src={field_bellpepper_mature} alt="Bell Pepper growing" />,
    },

    carrot: {
        growing: () => <img src={field_carrot_growing} alt="Carrot growing" />,
        mature: () => <img src={field_carrot_mature} alt="Carrot growing" />,
    },

    beet: {
        growing: () => <img src={field_beet_growing} alt="Beet growing" />,
        mature: () => <img src={field_beet_mature} alt="Beet growing" />,
    }
}