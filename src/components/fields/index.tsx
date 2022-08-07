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
    empty: () => <img src={field_empty} />,

    tomato: {
        growing: () => <img src={field_tomato_growing} />,
        mature: () => <img src={field_tomato_mature} />
    },

    bellPepper: {
        growing: () => <img src={field_bellpepper_growing} />,
        mature: () => <img src={field_bellpepper_mature} />,
    },

    carrot: {
        growing: () => <img src={field_carrot_growing} />,
        mature: () => <img src={field_carrot_mature} />,
    },

    beet: {
        growing: () => <img src={field_beet_growing} />,
        mature: () => <img src={field_beet_mature} />,
    }
}