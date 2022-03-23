import {
    Container,
    Grid,
    Box,
  } from "@mui/material";
  import * as React from "react";
  
  import PageHeadSection from "./PageHeadSection";
  import TokenInfo from "./TokenInfo";
  import { View, Text } from 'dripsy'

  // import firebase from '../../lib/firebase/Firebase';
  const data = [
    {
        "position": 0,
        "position_wait_time": 0,
        "user": {
            "first_name": "Mr. Rathishraj Janarthanan",
            "last_name": "Rathish Raj Janarthanan",
            "email": "rathishraj@gmail.com",
            "username": "Rathish",
            "email_provided": true,
            "phone_number_provided": true,
            "phone_number": "+919513321316",
            "display_name": "Mr. Rathishraj Janarthanan"
        },
        "no_show": false,
        "has_noticed": false,
        "has_preference": false,
        "in_progress": false,
        "token": "TK159MY",
        "user_contact": "+919513321316",
        "queue": {
            "id": 830,
            "title": "Dr.Ashish Sharma",
            "upc": "QUEUE47575",
            "images": [
                {
                    "id": 665,
                    "original": "https://mw.queueone.co.in/media/images/products/2022/03/Dr_Ashish.jpeg",
                    "caption": "",
                    "display_order": 0,
                    "date_created": "2022-03-05T10:04:26.746808Z",
                    "product": 830
                }
            ],
            "queue_store": {
                "id": 580,
                "name": "Anytime Physiotherapy Clinic",
                "image": "https://mw.queueone.co.in/media/uploads/store-images/Clinic.jpeg",
                "manager_name": null,
                "phone": "+919507222727",
                "location": {
                    "latitude": 73.7306711,
                    "longitude": 24.5685746
                },
                "email": "qone@anytimephysio.in",
                "reference": "Anytime Physiotherapy Clinic",
                "description": "One of the Best Physiotherapy Clinic in Udaipur (Rajasthan) for Orthopedic Physiotherapy & Sports Injuries, etc.",
                "partner": "Anytime Physiotherapy Clinic & Rehabilation Center",
                "opening_periods": "stores.OpeningPeriod.None",
                "group": "General",
                "store_property": [],
                "store_qr": "https://mw.queueone.co.in/media/store/580/qr/onboarding/580.png"
            },
            "queue_type": "scheduled_queue",
            "queue_business_purpose": "",
            "queue_avg_waiting_time_provided": 20,
            "queue_avg_waiting_time_calculated_units": "minutes",
            "queue_avg_waiting_time_calculated": 20,
            "queue_status": "active",
            "rating": null,
            "queue_current_depth": 0,
            "queue_group_position": true,
            "queue_simplify_onboarding": false
        },
        "date": "2022-03-15T15:40:16.035246Z",
        "alert_requirement": "alertall",
        "waitTimeProposals": [],
        "booking": [
            {
                "slot": {
                    "id": 1166554,
                    "slot_start_time": "09:00:00",
                    "slot_end_time": "09:20",
                    "slot_type": "general",
                    "available": false
                },
                "booking_date": "2022-03-17T00:00:00Z",
                "booking_source": "online"
            }
        ],
        "user_nba_text": "",
        "queue_property": [],
        "noticed_by": null,
        "served_by": null,
        "serving_by": null,
        "provision": false,
        "slot_expired_message": "",
        "slot_withintime_message": "",
        "slot_early_message": "",
        "nba": [
            {
                "type": "suggestion",
                "text": "This queue's text communication is not enabled, no communication will be sent to customers. You can enable from Queue Settings > Communication > Direct Message"
            },
            {
                "type": "suggestion",
                "text": "This queue's suggestion message is not set"
            },
            {
                "type": "info",
                "text": "The selected queue does not have an intake form queue position might not have additional customer details"
            }
        ],
        "order_number": "",
        "selected_offers": [],
        "selected_services": [],
        "position_qr": "https://mw.queueone.co.in/media/opt/qonemiddleware/eplazza/src/eplazzaadmin/media/product/830/position/TK159MY.png"
    },
    {
        "position": 0,
        "position_wait_time": 0,
        "user": {
            "first_name": "Mr. Rathishraj Janarthanan",
            "last_name": "Rathish Raj Janarthanan",
            "email": "rathishraj@gmail.com",
            "username": "Rathish",
            "email_provided": true,
            "phone_number_provided": true,
            "phone_number": "+919513321316",
            "display_name": "Mr. Rathishraj Janarthanan"
        },
        "no_show": false,
        "has_noticed": false,
        "has_preference": true,
        "in_progress": false,
        "token": "TK68IT1",
        "user_contact": "+919513321316",
        "queue": {
            "id": 766,
            "title": "test eMeeting",
            "upc": "QUEUE31446",
            "images": [
                {
                    "id": 619,
                    "original": "https://mw.queueone.co.in/media/images/products/2021/01/drawing_yKHEos9.svg",
                    "caption": "",
                    "display_order": 0,
                    "date_created": "2021-01-07T18:39:08.611869Z",
                    "product": 766
                }
            ],
            "queue_store": {
                "id": 67,
                "name": "YobnyStore",
                "image": "https://mw.queueone.co.in/media/uploads/store-images/Screenshot_2019-08-22-22-36-17-657_com.yobny.queueonepartner.png",
                "manager_name": null,
                "phone": "+919513321316",
                "location": {
                    "latitude": 12.9882914,
                    "longitude": 77.6698976
                },
                "email": "rathishraj@gmail.com",
                "reference": "YobnyStore",
                "description": "<p>Test</p>",
                "partner": "YobnY Tech Solutions",
                "opening_periods": "stores.OpeningPeriod.None",
                "group": "General",
                "store_property": [
                    157
                ],
                "store_qr": null
            },
            "queue_type": "scheduled_queue",
            "queue_business_purpose": "Welcome to Test Queue",
            "queue_avg_waiting_time_provided": 15,
            "queue_avg_waiting_time_calculated_units": "minutes",
            "queue_avg_waiting_time_calculated": 0,
            "queue_status": "active",
            "rating": null,
            "queue_current_depth": 0,
            "queue_group_position": true,
            "queue_simplify_onboarding": false
        },
        "date": "2022-03-16T11:39:01.874894Z",
        "alert_requirement": "alertall",
        "waitTimeProposals": [],
        "booking": [
            {
                "slot": {
                    "id": 1172852,
                    "slot_start_time": "17:30",
                    "slot_end_time": "18:00",
                    "slot_type": "general",
                    "available": true
                },
                "booking_date": "2022-03-16T00:00:00Z",
                "booking_source": "online"
            }
        ],
        "user_nba_text": "",
        "queue_property": [
            {
                "id": 985916,
                "value": "2222",
                "name": "Aadhar Card",
                "visible": true,
                "attrtype": "text"
            }
        ],
        "noticed_by": null,
        "served_by": null,
        "serving_by": null,
        "provision": false,
        "slot_expired_message": "",
        "slot_withintime_message": "",
        "slot_early_message": "",
        "nba": [
            {
                "type": "suggestion",
                "text": "This queue's text communication is not enabled, no communication will be sent to customers. You can enable from Queue Settings > Communication > Direct Message"
            },
            {
                "type": "suggestion",
                "text": "This queue's suggestion message is not set"
            },
            {
                "type": "info",
                "text": "The selected queue does not have an intake form queue position might not have additional customer details"
            }
        ],
        "order_number": "",
        "selected_offers": [],
        "selected_services": [
            {
                "id": 232,
                "option": "Oreo shake",
                "price_currency": "GBP",
                "price_excl_tax": "0.00",
                "price_incl_tax": "0.00",
                "description": "Oreo shake",
                "group": 11,
                "attribute_image": null
            }
        ],
        "position_qr": "https://mw.queueone.co.in/media/opt/qonemiddleware/eplazza/src/eplazzaadmin/media/product/766/position/TK68IT1.png"
    },
    {
        "position": 1,
        "position_wait_time": -64871,
        "user": {
            "first_name": "Mr. Rathishraj Janarthanan",
            "last_name": "Rathish Raj Janarthanan",
            "email": "rathishraj@gmail.com",
            "username": "Rathish",
            "email_provided": true,
            "phone_number_provided": true,
            "phone_number": "+919513321316",
            "display_name": "Mr. Rathishraj Janarthanan"
        },
        "no_show": false,
        "has_noticed": false,
        "has_preference": true,
        "in_progress": false,
        "token": "TK877P0",
        "user_contact": "+919513321316",
        "queue": {
            "id": 765,
            "title": "FIFO eMeeting",
            "upc": "QUEUE69022",
            "images": [
                {
                    "id": 618,
                    "original": "https://mw.queueone.co.in/media/images/products/2021/01/drawing_z9Eec2a.svg",
                    "caption": "",
                    "display_order": 0,
                    "date_created": "2021-01-07T16:42:14.528649Z",
                    "product": 765
                }
            ],
            "queue_store": {
                "id": 67,
                "name": "YobnyStore",
                "image": "https://mw.queueone.co.in/media/uploads/store-images/Screenshot_2019-08-22-22-36-17-657_com.yobny.queueonepartner.png",
                "manager_name": null,
                "phone": "+919513321316",
                "location": {
                    "latitude": 12.9882914,
                    "longitude": 77.6698976
                },
                "email": "rathishraj@gmail.com",
                "reference": "YobnyStore",
                "description": "<p>Test</p>",
                "partner": "YobnY Tech Solutions",
                "opening_periods": "stores.OpeningPeriod.None",
                "group": "General",
                "store_property": [
                    157
                ],
                "store_qr": null
            },
            "queue_type": "scheduled_queue",
            "queue_business_purpose": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
            "queue_avg_waiting_time_provided": 15,
            "queue_avg_waiting_time_calculated_units": "minutes",
            "queue_avg_waiting_time_calculated": 0,
            "queue_status": "inprogress",
            "rating": null,
            "queue_current_depth": 2,
            "queue_group_position": true,
            "queue_simplify_onboarding": true
        },
        "date": "2022-03-12T12:23:01.614130Z",
        "alert_requirement": "alertall",
        "waitTimeProposals": [],
        "booking": [],
        "user_nba_text": "",
        "queue_property": [
            {
                "id": 985704,
                "value": "",
                "name": "What are you doing",
                "visible": true,
                "attrtype": "richtext"
            },
            {
                "id": 985705,
                "value": 34,
                "name": "age",
                "visible": false,
                "attrtype": "integer"
            },
            {
                "id": 985706,
                "value": null,
                "name": "Number of Adults",
                "visible": false,
                "attrtype": "boolean"
            },
            {
                "id": 985707,
                "value": null,
                "name": "Height",
                "visible": false,
                "attrtype": "float"
            }
        ],
        "noticed_by": null,
        "served_by": null,
        "serving_by": null,
        "provision": false,
        "slot_expired_message": "",
        "slot_withintime_message": "",
        "slot_early_message": "",
        "nba": [
            {
                "type": "suggestion",
                "text": "This queue's text communication is not enabled, no communication will be sent to customers. You can enable from Queue Settings > Communication > Direct Message"
            },
            {
                "type": "suggestion",
                "text": "This queue's suggestion message is not set"
            },
            {
                "type": "info",
                "text": "The selected queue does not have an intake form queue position might not have additional customer details"
            }
        ],
        "order_number": "",
        "selected_offers": [],
        "selected_services": [
            {
                "id": 232,
                "option": "Oreo shake",
                "price_currency": "GBP",
                "price_excl_tax": "0.00",
                "price_incl_tax": "0.00",
                "description": "Oreo shake",
                "group": 11,
                "attribute_image": null
            }
        ],
        "position_qr": "https://mw.queueone.co.in/media/opt/qonemiddleware/eplazza/src/eplazzaadmin/media/product/765/position/TK877P0.png"
    },
    {
        "position": 1,
        "position_wait_time": -68034,
        "user": {
            "first_name": "Mr. Rathishraj Janarthanan",
            "last_name": "Rathish Raj Janarthanan",
            "email": "rathishraj@gmail.com",
            "username": "Rathish",
            "email_provided": true,
            "phone_number_provided": true,
            "phone_number": "+919513321316",
            "display_name": "Mr. Rathishraj Janarthanan"
        },
        "no_show": false,
        "has_noticed": false,
        "has_preference": true,
        "in_progress": false,
        "token": "TK7L9G",
        "user_contact": "+919513321316",
        "queue": {
            "id": 832,
            "title": "Digital Enquiry Desk",
            "upc": "QUEUE66800",
            "images": [
                {
                    "id": 666,
                    "original": "https://mw.queueone.co.in/media/images/products/2022/03/Register.png",
                    "caption": "",
                    "display_order": 0,
                    "date_created": "2022-03-10T19:29:47.430924Z",
                    "product": 832
                }
            ],
            "queue_store": {
                "id": 581,
                "name": "QueueOne Demo",
                "image": "https://mw.queueone.co.in/media/uploads/store-images/Q1-Logo.jpg",
                "manager_name": null,
                "phone": "+919886030041",
                "location": {
                    "latitude": 26.90300999999999,
                    "longitude": 75.7988362
                },
                "email": "demo.qone@qone.in",
                "reference": "QueueOne Demo",
                "description": "<p>Here we create demos for various use-cases that QueueOne addresses</p>",
                "partner": "QueueOne Demo",
                "opening_periods": "stores.OpeningPeriod.None",
                "group": "General",
                "store_property": [],
                "store_qr": "https://mw.queueone.co.in/media/store/581/qr/onboarding/581.png"
            },
            "queue_type": "scheduled_queue",
            "queue_business_purpose": "Say goodbye to old-style registrations/inquiries taken over a piece of paper. This digital queue collects all the user info we need.",
            "queue_avg_waiting_time_provided": 2,
            "queue_avg_waiting_time_calculated_units": "minutes",
            "queue_avg_waiting_time_calculated": 0,
            "queue_status": "active",
            "rating": null,
            "queue_current_depth": 2,
            "queue_group_position": true,
            "queue_simplify_onboarding": true
        },
        "date": "2022-03-14T17:06:03.746441Z",
        "alert_requirement": "alertall",
        "waitTimeProposals": [],
        "booking": [],
        "user_nba_text": "",
        "queue_property": [
            {
                "id": 985811,
                "value": "Mallik",
                "name": "Name",
                "visible": true,
                "attrtype": "text"
            },
            {
                "id": 985812,
                "value": "mallik@gmail.com",
                "name": "Email Id",
                "visible": false,
                "attrtype": "text"
            },
            {
                "id": 985813,
                "value": "YoBny",
                "name": "Your Company / Organization / Institution",
                "visible": false,
                "attrtype": "text"
            },
            {
                "id": 985814,
                "value": "Yes",
                "name": "You are looing out from this event/program?",
                "visible": false,
                "attrtype": "text"
            }
        ],
        "noticed_by": null,
        "served_by": null,
        "serving_by": null,
        "provision": false,
        "slot_expired_message": "",
        "slot_withintime_message": "",
        "slot_early_message": "",
        "nba": [
            {
                "type": "suggestion",
                "text": "This queue's text communication is not enabled, no communication will be sent to customers. You can enable from Queue Settings > Communication > Direct Message"
            },
            {
                "type": "suggestion",
                "text": "This queue's suggestion message is not set"
            },
            {
                "type": "info",
                "text": "The selected queue does not have an intake form queue position might not have additional customer details"
            }
        ],
        "order_number": "",
        "selected_offers": [],
        "selected_services": [
            {
                "id": 232,
                "option": "Oreo shake",
                "price_currency": "GBP",
                "price_excl_tax": "0.00",
                "price_incl_tax": "0.00",
                "description": "Oreo shake",
                "group": 11,
                "attribute_image": null
            }
        ],
        "position_qr": "https://mw.queueone.co.in/media/opt/qonemiddleware/eplazza/src/eplazzaadmin/media/product/832/position/TK7L9G.png"
    }
];
  export default function Tokens() {
   
   
    return (
        <Container
          sx={{
            marginTop: "1em",
          }}
        >
          <Grid container>
            <Grid item md={2} />
            <Grid item xs={12} sm={12} md={8}>
              {/* Page Header */}
              <PageHeadSection />
            
            </Grid>
            <Grid item md={2} />
            <Grid item md={2} />
            <Grid item md={8} xs={12} sm={12}>
              <Box
                sx={{
                  mb: 1,
                }}
              >
              
              </Box>
              <ul >
                {data?.map((item: any) => {
                  return (
                    <li key={item.token} style={{ listStyle: "none" }}>
                      <TokenInfo token={item} />
                    </li>
                  );
                })}
              </ul>
            </Grid>
          </Grid>
        </Container>
        //  <p>Solito+ NextJs</p>
      
    );
  }
  
//   // This gets called on every request
//   export async function getServerSideProps() {
//     const data = {};
//     return { props: { data } };
//   }
  