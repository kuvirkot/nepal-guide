import React from "react";
import CMS from "netlify-cms";

import HomePreview from "./cms-preview-templates/home";
import BlogPreview from "./cms-preview-templates/blog";
import GuidePreview from "./cms-preview-templates/guide";
import ToursPreview from "./cms-preview-templates/tours";
import ContactPreview from "./cms-preview-templates/contact";

// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("blog", BlogPreview);
CMS.registerPreviewTemplate("guide", GuidePreview);
CMS.registerPreviewTemplate("tours", ToursPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerWidget("color", ColorControl);
