// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export type Product = {
    id: string;
    name: string;
    description: string;
    dollars_per_seat: number;
    add_ons: AddOn[];
};

export type AddOn = {
    id: string;
    name: string;
    display_name: string;
    dollars_per_seat: number;
};

export type CloudState = {
    customer?: CloudCustomer;
}

// Customer model represents a customer on the system.
export type CloudCustomer = {
	id: string;
	creator_id: string;
	create_at: number;
	email: string;
	name: string;
	num_employees: number;
	contact_first_name: string;
	contact_last_name: string;
	billing_address: Address;
	company_address: Address;
	payment_method: PaymentMethod;
}

// Address model represents a customer's address.
export type Address = {
	city: string;
	country: string;
	line1: string;
	line2: string;
	postal_code: string;
	state: string;
}

// PaymentMethod represents methods of payment for a customer.
export type PaymentMethod = {
	type: string;
	last_four: number;
	exp_month: number;
	exp_year: number;
	card_brand: string;
	name: string;
}