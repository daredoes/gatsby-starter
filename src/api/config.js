import { apiHost } from 'gatsby-env-variables'
export const API_PATH = apiHost
export const TOKEN_PATH = '/api/v1/auth/exchange'

export const BASE_PATH = '/grpc'

export const CRM_PATH = `${BASE_PATH}/public/crm/v2`
export const SERVICE_PATH_DEALER = `${BASE_PATH}/dealer`
export const SERVICE_PATH_VEHICLE = `${BASE_PATH}/vehicle`
export const SERVICE_PATH_COMMERCIAL_WEEKLY = `${BASE_PATH}/vehicle_commercial_weekly`
export const SERVICE_PATH_INVENTORY_DATA_VENDOR = `${BASE_PATH}/inventory_data_vendor`
export const SERVICE_PATH_LEADS = `${BASE_PATH}/leads`
export const SERVICE_PATH_COLLECTIONS = `${BASE_PATH}/collections`
export const SERVICE_PATH_COMMUNICATIONS = `${BASE_PATH}/communications`

export const DEAL_DOCUMENTS_PATH = `${BASE_PATH}/deal_documents/v1`
export const MARKET_AREA_SERVICE_PATH = `${BASE_PATH}/market_areas/v1`
export const SERVICE_PATH_ADDRESS = `${BASE_PATH}/address`
export const SERVICE_PATH_ASSET = `${BASE_PATH}/asset_mgmt`
export const SERVICE_PATH_ASSET_EVENTS = `${BASE_PATH}/asset_events`
export const SERVICE_PATH_3V_DEALER = `${BASE_PATH}/v3/dealer`
export const SERVICE_PATH_SUBSCRIPTION = `${BASE_PATH}/subscription`
export const SERVICE_PATH_PAYMENT_HISTORY = `${BASE_PATH}/payment_history`
export const SERVICE_PATH_ORDER = `${BASE_PATH}/order`
export const SERVICE_PATH_UBER_VEHICLE_MANAGEMENT = `${BASE_PATH}/uber_vehicle_management/v1`

export const INCENTIVE_SERVICE_PATH = `${BASE_PATH}/incentive`
export const WALLET_SERVICE_PATH = `${BASE_PATH}/wallet`

export const DEALER_VER = 'v3'
export const DEALER_PATH = `${BASE_PATH}/${DEALER_VER}/dealer/${DEALER_VER}/dealer`
export const SERVICE_PATH_OPERATING_HOURS = `${BASE_PATH}/operating_hours`

export const ORDER_PATH = `${BASE_PATH}/order`
export const CUSTOMER_ORDER_PATH = `${BASE_PATH}/customer_order/order`

export const USER_SERVICE_PATH = `${BASE_PATH}/user_service`

/**
 * TODO
 * move all constants below to the respective files -
 * in the same way like it is already done in
 * src/api/customer.js or src/api/dealer.js
 */

export const GET_APPLICATION_PATH = `${CRM_PATH}/get_customer_application`
export const GET_CONTRACT_PDF_PATH = `${CRM_PATH}/get_contract_pdf`
export const GET_TRANSUNION_REPORT_PATH = `${CRM_PATH}/get_transunion_report`
export const GET_DECISION_PATH = `${CRM_PATH}/get_decision`
export const GET_DEALER_PATH = `${CRM_PATH}/get_dealer`
export const GET_DRIVER_LICENSE_PATH = `${CRM_PATH}/get_driver_license`
export const GET_GOVERNMENT_IDS_PATH = `${CRM_PATH}/get_government_ids`
export const CREATE_GOVERNMENT_ID_PATH = `${CRM_PATH}/create_government_id`

export const GET_ORDERS_PATH = `${CRM_PATH}/get_orders`
export const GET_ORDER_FULFILLMENT_CHECKLISTS_PATH = `${CRM_PATH}/get_order_fulfillment_checklists`
export const UPDATE_ORDER_FULFILLMENT_CHECKLIST_PATH = `${CRM_PATH}/update_order_fulfillment_checklist`
export const GET_AUTOCHECK_STATUS_PATH = `${CRM_PATH}/get_autocheck_status`
export const BULK_ASSIGN_ORDERS = `${CRM_PATH}/bulk_assign_orders`
export const GET_DEALERS_ACTIVE_ORDERS_COUNT_PATH = `${CRM_PATH}/get_dealers_active_orders_count`

export const GET_SUBSCRIPTION_PATH = `${CRM_PATH}/get_subscription`

export const GET_REGIONAL_DEAL_DOCUMENT_CATEGORIES_PATH = `${DEAL_DOCUMENTS_PATH}/get_regional_deal_document_categories`

export const SEND_FIX_DEAL_DOCUMENTS_REMINDER_PATH = `${DEAL_DOCUMENTS_PATH}/send_fix_deal_documents_reminder`

export const PAY_DEALER_INCENTIVE_PATH = `${CRM_PATH}/pay_dealer_incentive`
export const GET_VEHICLE_PATH = `${CRM_PATH}/get_vehicle`

export const GET_PERMISSIONS_PATH = `${CRM_PATH}/get_permissions`
export const GET_OKTA_GROUPS_PATH = `${CRM_PATH}/get_okta_groups`

export const CREATE_CUSTOMER_APPLICATION_PATH = `${CRM_PATH}/create_customer_application`
export const CANCEL_CUSTOMER_APPLICATION_PATH = `${CRM_PATH}/cancel_customer_application`
export const REDECISION_CUSTOMER_APPLICATION_PATH = `${CRM_PATH}/redecision_customer_application`
export const CREATE_DECISION_OVERRIDE_PATH = `${CRM_PATH}/create_decision_override`
export const DECISION_GET_INNOVIS_PATH = `${CRM_PATH}/get_innovis_report`
export const DECISION_GET_SOCURE_PATH = `${CRM_PATH}/get_socure_report`
export const DECISION_GET_FAILSAFE_PATH = `${CRM_PATH}/get_failsafe_report`
export const CREATE_CONTRACT_AMENDMENT = `${CRM_PATH}/create_contract_amendment`
export const GET_VERIFY_FRAUD_ALERT_DATA_PATH = `${CRM_PATH}/get_verify_fraud_alert_data`

export const GET_CUSTOMER_NOTES_PATH = `${CRM_PATH}/get_customer_notes`
export const CREATE_CUSTOMER_NOTE_PATH = `${CRM_PATH}/create_customer_note`

export const GET_CUSTOMER_DOCUMENTS_PATH = `${CRM_PATH}/get_customer_documents`
export const GET_CUSTOMER_DOCUMENT_PATH = `${CRM_PATH}/get_customer_document`
export const UPLOAD_CUSTOMER_DOCUMENT_PATH = `${CRM_PATH}/upload_customer_document`
export const UPDATE_CUSTOMER_DOCUMENT_STATUS_PATH = `${CRM_PATH}/validate_customer_document`
export const DELETE_CUSTOMER_DOCUMENT_PATH = `${CRM_PATH}/delete_customer_document`
export const UPLOAD_DOCUMENT_TO_EORIGINAL_PATH = `${CRM_PATH}/upload_document_to_eoriginal`

export const GET_TICKETS_PATH = `${CRM_PATH}/get_tickets`
export const CREATE_TICKET_PATH = `${CRM_PATH}/create_ticket`
export const UPDATE_TICKET_PATH = `${CRM_PATH}/update_ticket`
export const GET_USERS_PATH = `${CRM_PATH}/get_users`

export const GET_PROMOTIONS_PATH = `${CRM_PATH}/get_promotions`
export const GET_PROMOTION_COUPONS_PATH = `${CRM_PATH}/get_promotion_coupons`
export const CREATE_PROMOTIONS_PATH = `${CRM_PATH}/create_promotions`

export const CREATE_LICENSE_PLATE = `${CRM_PATH}/create_license_plate`

export const CANCEL_ORDER = `${CRM_PATH}/cancel_order`

export const GET_REGIONS_PATH = `${MARKET_AREA_SERVICE_PATH}/get_regions`
export const GET_REGION_ELIGIBILITY_RULES_PATH = `${MARKET_AREA_SERVICE_PATH}/get_region_eligibility_rules`
export const INCLUDE_RULE_FOR_REGION_PATH = `${MARKET_AREA_SERVICE_PATH}/include_rule_for_region`
export const EXCLUDE_RULE_FOR_REGION_PATH = `${MARKET_AREA_SERVICE_PATH}/remove_rule_for_region`
export const ACTIVATE_REGION_PATH = `${MARKET_AREA_SERVICE_PATH}/activate_region`

export const GET_SUBSCRIPTION_TERMINATION_REQUESTS_PATH = `${SERVICE_PATH_SUBSCRIPTION}/v1/get_subscription_termination_requests`
export const GET_SUBSCRIPTION_TERMINATIONS_PATH = `${SERVICE_PATH_SUBSCRIPTION}/v1/get_subscription_terminations`

export const GET_SUBSCRIPTION_TERMINATION_REASONS_PATH = `${SERVICE_PATH_SUBSCRIPTION}/v1/get_subscription_termination_reasons`
