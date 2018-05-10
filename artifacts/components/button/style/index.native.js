import variables from '../../style/themes/default.native';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
let bottomButtonHeight;
if (height == 812) {
    //min 34
    //header 88 + swiper 200 - FlatList margin 34 + tabbar 30
    bottomButtonHeight = 80;
}
else {
    bottomButtonHeight = 40;
}
export default {
    container: {
        flexDirection: 'row',
    },
    defaultHighlight: {
        backgroundColor: variables.fill_tap,
        borderColor: variables.border_color_base,
    },
    primaryHighlight: {
        backgroundColor: variables.primary_button_fill_tap,
        borderColor: variables.primary_button_fill,
    },
    ghostHighlight: {
        backgroundColor: 'transparent',
        borderColor: variables.ghost_button_fill_tap,
    },
    warningHighlight: {
        backgroundColor: variables.warning_button_fill_tap,
        borderColor: variables.warning_button_fill,
    },
    bottomHighlight: {
        backgroundColor: variables.primary_button_fill_tap,
        borderColor: variables.primary_button_fill_tap,
    },
    tabHighlight: {
        backgroundColor: variables.primary_button_fill,
        borderColor: variables.primary_button_fill,
    },
    wrapperStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: variables.radius_md,
        borderWidth: 1,
    },
    largeRaw: {
        height: variables.button_height,
        paddingLeft: variables.h_spacing_lg,
        paddingRight: variables.h_spacing_lg,
    },
    smallRaw: {
        height: variables.button_height_sm,
        paddingLeft: variables.h_spacing_sm,
        paddingRight: variables.h_spacing_sm,
    },
    defaultRaw: {
        backgroundColor: variables.fill_base,
        borderColor: variables.border_color_base,
    },
    primaryRaw: {
        backgroundColor: variables.primary_button_fill,
        borderColor: variables.primary_button_fill,
    },
    ghostRaw: {
        backgroundColor: 'transparent',
        borderColor: variables.ghost_button_color,
    },
    warningRaw: {
        backgroundColor: variables.warning_button_fill,
        borderColor: variables.warning_button_fill,
    },
    bottomRaw: {
        backgroundColor: variables.primary_button_fill,
        borderColor: variables.primary_button_fill,
        height: bottomButtonHeight,
        width: width,
        borderRadius: 0,
    },
    tabRaw: {
        height: variables.button_height_md,
        backgroundColor: variables.color_text_base_inverse,
        borderColor: variables.border_color_base,
        borderRadius: variables.radius_xlg,
    },
    tabSelectedRaw: {
        backgroundColor: variables.primary_button_fill,
        borderColor: variables.primary_button_fill,
    },
    defaultDisabledRaw: {
        backgroundColor: variables.fill_disabled,
        borderColor: variables.fill_disabled,
    },
    primaryDisabledRaw: {
        opacity: 0.4,
    },
    ghostDisabledRaw: {
        borderColor: `${variables.color_text_base}1A`,
    },
    warningDisabledRaw: {
        opacity: 0.4,
    },
    defaultHighlightText: {
        color: variables.color_text_base,
    },
    primaryHighlightText: {
        color: `${variables.color_text_base_inverse}4D`,
    },
    ghostHighlightText: {
        color: variables.ghost_button_fill_tap,
    },
    warningHighlightText: {
        color: `${variables.color_text_base_inverse}4D`,
    },
    bottomHighlightText: {
        color: `${variables.color_text_base_inverse}4D`,
    },
    tabHighlightText: {
        color: `${variables.color_text_base_inverse}4D`,
    },
    largeRawText: {
        fontSize: variables.button_font_size,
        fontFamily: variables.font_family,
    },
    smallRawText: {
        fontSize: variables.button_font_size_sm,
        fontFamily: variables.font_family,
    },
    defaultRawText: {
        color: variables.color_text_base,
        fontFamily: variables.font_family,
    },
    primaryRawText: {
        color: variables.color_text_base_inverse,
        fontFamily: variables.font_family,
    },
    ghostRawText: {
        color: variables.ghost_button_color,
        fontFamily: variables.font_family,
    },
    warningRawText: {
        color: variables.color_text_base_inverse,
        fontFamily: variables.font_family,
    },
    bottomRawText: {
        color: variables.color_text_base_inverse,
        fontFamily: variables.font_family,
    },
    tabRawText: {
        color: variables.color_text_placeholder,
        fontSize: variables.button_font_size_md,
        fontFamily: variables.font_family,
    },
    tabSelectedRawText: {
        color: variables.color_text_base_inverse,
        fontSize: variables.button_font_size_md,
        fontFamily: variables.font_family,
    },
    defaultDisabledRawText: {
        color: `${variables.color_text_base}4D`,
    },
    primaryDisabledRawText: {
        color: `${variables.color_text_base_inverse}99`,
    },
    ghostDisabledRawText: {
        color: `${variables.color_text_base}1A`,
    },
    warningDisabledRawText: {
        color: `${variables.color_text_base_inverse}99`,
    },
    bottomDisabledRawText: {
        color: `${variables.color_text_base_inverse}99`,
    },
    tabDisabledRawText: {
        color: `${variables.color_text_base}4D`,
    },
    indicator: {
        marginRight: variables.h_spacing_md,
    },
};
//# sourceMappingURL=index.native.js.map