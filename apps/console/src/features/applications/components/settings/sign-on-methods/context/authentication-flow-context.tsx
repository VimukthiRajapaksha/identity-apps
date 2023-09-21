/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
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
 */

import { Context, createContext } from "react";

/**
 * Props interface for the AuthenticationFlowContext.
 */
export type AuthenticationFlowContextProps = {
    isConditionalAuthenticationEnabled: boolean;
    onConditionalAuthenticationToggle: (enabled: boolean) => void;
};

/**
 * Context object for managing authentication flow status.
 */
const AuthenticationFlowContext: Context<AuthenticationFlowContextProps> = 
    createContext<null | AuthenticationFlowContextProps>(null);

/**
 * Display name for the AuthenticationFlowContext.
 */
AuthenticationFlowContext.displayName = "AuthenticationFlowContext";

export default AuthenticationFlowContext;