/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

import { action } from "@storybook/addon-actions";
import { SettigsSectionIconSet } from "@wso2is/theme";
import React from "react";
import { Section } from "../../../src";
import { UserAvatar } from "../../../src";
import { meta } from "./section.stories.meta";

export default {
    parameters: {
        component: Section,
        componentSubtitle: meta.description,
    },
    title: "Components API/Components/Section"
};

/**
 * Story to display a default section.
 * @return {any}
 */
export const Default = () => (
    <Section
        description="Manage and update your personal details like name, email, mobile number, organization, etc."
        header="Profile"
        icon={ (
            <UserAvatar
                spaced="right"
                size="tiny"
                image="https://avatars3.githubusercontent.com/u/25959096?s=460&v=4"
                onEditAvatarClicked={ null }
            />
        ) }
        iconMini={ (
            <UserAvatar
                spaced="right"
                size="tiny"
                image="https://avatars3.githubusercontent.com/u/25959096?s=460&v=4"
                onEditAvatarClicked={ null }
            />
        ) }
    />
);

Default.story = {
    parameters: {
        docs: {
            storyDescription: meta.description,
        },
    }
};

/**
 * Story to display a section with an action.
 * @return {any}
 */
export const SectionWithAction = () => (
    <Section
        description="Download all your profile data including personal data, security questions, and consents."
        header="Export profile"
        contentPadding={ false }
        icon={ SettigsSectionIconSet.profileExport }
        iconMini={ SettigsSectionIconSet.profileExportMini }
        iconSize="auto"
        iconStyle="colored"
        iconFloated="right"
        onPrimaryActionClick={ action("Downloading profile in JSON format") }
        primaryAction="Download as JSON"
        primaryActionIcon="cloud download"
    />
);

SectionWithAction.story = {
    parameters: {
        docs: {
            storyDescription: meta.stories[ 0 ].description,
        },
    }
};
