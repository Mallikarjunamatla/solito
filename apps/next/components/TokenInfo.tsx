import {
  Alert,
  Box,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Typography,
  Link as MLink,
  Button,
  Tooltip,
  Grid,
  Avatar,
  DialogProps,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import {
  downloadTokenHandler,
  getCalendar,
} from "./QueueFunctions";
import moment from "moment";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import CancelIcon from "@mui/icons-material/Cancel";
import MoveDownIcon from "@mui/icons-material/MoveDown";
import Image, { ImageLoaderProps } from "next/image";
import * as React from "react";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import queueStoreStrings from "./StringConstants";
// import styles from "../styles/QueueServiceType.module.css";
// import styles2 from "../styles/UserBookingsButton.module.css";
// import stylehead from "../styles/Heading.module.css";

import Link from "next/link";
function myLoader(image: ImageLoaderProps): string {
  if (image.src === "/static/images/question.svg") {
    return `https://cdn.queueone.co.in${image.src}?w=${image.width}&q=${
      image.quality || 75
    }`;
  }
  return `${image.src}?w=${image.width}&q=${image.quality || 75}`;
}

export default function TokenInfo({ token }: any) {
  const [isSelected, setSelected] = useState<boolean>(false);
  const [isError, setError] = useState(false);
  const [slotText, setSlotText] = useState("");
  const [dateDifference, setDateDifference] = useState<number>(0);
  const [tokenID, setTokenID] = useState<string>(token?.token);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const bookingDate = token?.booking[0]?.booking_date?.split("T")[0] ?? "";

    if (!token?.queue?.queue_simplify_onboarding) {
      if (bookingDate !== "") {
        const today = moment().startOf("day");
        const slotDate = new Date(token?.booking[0]?.booking_date);
        const slot_date: any = moment(new Date(slotDate));
        const dateDiff = slot_date.diff(today, "days");
        setDateDifference(dateDiff);
        const slot_start_time = token?.booking[0]?.slot?.slot_start_time;
        const slot_end_time = token?.booking[0]?.slot?.slot_end_time;
        // setDateDifference(dateDiff)
        const startTime = parseInt(slot_start_time?.split(":")[0]);
        const startMin =
          parseInt(slot_start_time?.split(":")[1]) > 0
            ? slot_start_time?.split(":")[1]
            : "00";

        const endTime = parseInt(slot_end_time?.split(":")[0]);
        const endMin =
          parseInt(slot_end_time?.split(":")[1]) > 0
            ? slot_end_time?.split(":")[1]
            : "00";

        if (slot_end_time) {
          if (startTime < 12 && endTime < 12) {
            const timeText = `${startTime}:${startMin}-${endTime}:${endMin} AM`;
            const slotText = `${new Date(bookingDate).toDateString()}, ${
              queueStoreStrings.booked_slot
            }: ${timeText}`;

            setSlotText(slotText);
          }
          if (startTime < 12 && endTime === 12) {
            const timeText = `${startTime}:${startMin}-${endTime}:${endMin} PM`;
            const slotText = `${new Date(bookingDate).toDateString()}, ${
              queueStoreStrings.booked_slot
            }: ${timeText}`;

            setSlotText(slotText);
          }
          if (startTime >= 12 && endTime >= 12) {
            const timeText = `${startTime - 12}:${startMin}-${
              endTime - 12
            }:${endMin} PM`;
            const slotText = `${new Date(bookingDate).toDateString()}, ${
              queueStoreStrings.booked_slot
            }: ${timeText}`;

            setSlotText(slotText);
          }
        } else {
          setSlotText("");
        }
      } else {
        setSlotText(" ");
      }
    }
    if (token?.queue?.queue_simplify_onboarding) {
      setSlotText(`${queueStoreStrings.position} : ${token?.position}`);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);
  const downloadHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    const onBoard = token?.queue_simplify_onboarding;

    if (!onBoard) {
      const startTime = token?.booking[0]?.slot?.slot_start_time.split(":")[0];
      const startMin = token?.booking[0]?.slot?.slot_start_time.split(":")[1];
      const endTime = token?.booking[0]?.slot?.slot_end_time.split(":")[0];
      const endMin = token?.booking[0]?.slot?.slot_end_time.split(":")[1];
      const slotDate =
        token?.booking[0]?.booking_date !== ""
          ? token?.booking[0]?.booking_date
          : new Date();
      getCalendar(
        token?.queue?.title,
        slotDate,
        new Date(),
        startTime,
        startMin,
        endTime,
        endMin,
        onBoard
      );
    }
    if (onBoard) {
      const startTime = 0;
      const startMin = 0;
      const endTime = 0;
      const endMin = 0;

      getCalendar(
        token?.queue?.title,
        new Date(),
        new Date(),
        startTime,
        startMin,
        endTime,
        endMin,
        onBoard
      );
    }
  };
  const downloadToken = (token: string, title: string, e: React.MouseEvent) => {
    e.preventDefault();
    downloadTokenHandler(token, title);
  };
  const imageURL: string =
    token?.position_qr !== null ? token?.position_qr : "question.svg";
  const queueImageURL: string =
    token?.queue?.images[0]?.original || "question.svg";
  const onSelectHandler = () => {
    setSelected((prev: boolean) => !prev);
  };
  const onError = () => {
    setError((pre) => !pre);
  };
  const cancelHandler = (tokenNumber: any, title: any, e: React.MouseEvent) => {
    e.preventDefault();
    setTokenID(token?.token);
  
  };

  const repositionHandler = (
    tokenNumber: any,
    title: any,
    tokenInfo: any,
    e: React.MouseEvent
  ) => {
    e.preventDefault();
  
  };

  const onClickQueueTitleHandler = () => {
  };
  const onClickQrCodeHandler = () => {
  
  };

  return (
    <Grid container spacing={1}>
      <Grid item sx={{}} xs={12} sm={12} md={12}>
        <Card
          sx={{
            // height : '150px',
            // padding : '10px',
            boxShadow: "3",
            "& .MuiCardContent-root:last-child": {
              paddingBottom: "0px",
            },
            "@media screen and (max-width : 768px)": {
              "&.MuiPaper-root": {
                // alignItems : 'self-end'
              },
              "& .MuiCardContent-root:last-child": {
                // paddingBottom : '10px'
              },
            },
          }}
        >
          <Grid
            item
            sx={
              {
                //  maxHeight : '169px'
              }
            }
            xs={4}
            sm={3}
            md={2}
          >
            <Link
                  href={`/token/${encodeURIComponent(
                    token?.token.replace("-", "_")
                  )}`}
                  passHref
            >
              <a>
              <Image
              loader={myLoader}
              data-testid={`position_qr ${token?.queue?.title}`}
              width={screenWidth > 768 ? 150 : 100}
              height={150}
              layout="fixed"
              src={isError && !queueImageURL ? "question.svg" : queueImageURL}
              onError={onError}
              alt={`${token?.queue?.title} qr code`}
            />
              </a>
              
            </Link>
           
          </Grid>

          <Grid item xs={8} sm={8} md={10}>
            <CardContent
              sx={{
                paddingLeft: screenWidth > 768 ? "50px" : "0px",
                paddingRight: "0px",
                paddingBottom: "0px",
                paddingTop: "0px",
                "&:last-child": {
                  // paddingBottom : '55px'
                },
              }}
            >
              <Box
                sx={{
                  padding: "0px",
                }}
              >
                <Link
                  href={`/queue/${encodeURIComponent(
                    token?.queue?.title?.replace("-", "_")
                  )}`}
                  passHref
                >
                  <Typography
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <a onClick={onClickQueueTitleHandler}>
                      {token?.queue?.title ?? ""}
                    </a>
                    <Typography
                      component="span"
                      sx={{
                        marginLeft: "5px",
                      }}
                    >
                      {dateDifference < 0 && (
                        <Tooltip title="Expired">
                          <Alert
                       
                            sx={{
                              "& .MuiSvgIcon-root": {
                                height: "14px",
                                margin: "0px",
                                padding: "0px",
                              },
                              "& .MuiAlert-icon": {
                                margin: "0px",
                              },
                              "& .MuiAlert-message": {
                                padding: "0px",
                              },
                            }}
                            severity="warning"
                          >
                            {queueStoreStrings.expired}
                          </Alert>
                        </Tooltip>
                      )}
                    </Typography>
                  </Typography>
                </Link>
                <Typography
                 
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {slotText}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Typography component="div">
                    {token?.token ?? ""}
                  </Typography>
                  <Box
                    sx={{
                      marginLeft: "5px",
                    }}
                  >
            <Link
                  href={`/token/${encodeURIComponent(
                    token?.token.replace("-", "_")
                  )}`}
                  passHref
            >
               <a>
                  <Image
                      onClick={onClickQrCodeHandler}
                      loader={myLoader}
                      data-testid={`position_qr ${token?.queue?.title}`}
                      width={30}
                      height={30}
                      layout="fixed"
                      src={
                        isError && !imageURL
                          ? "question.svg"
                          : imageURL.replace(
                              "media/opt/qonemiddleware/eplazza/src/eplazzaadmin/",
                              ""
                            )
                      }
                      onError={onError}
                      alt={`position_qr ${token?.queue?.title}`}
                    />
               </a>
            </Link>
                    
                  </Box>
                </Box>
              </Box>

              <Typography
                sx={{}}
                component="div"
              >
                <Typography component="div">
                  {!token?.queue.queue_simplify_onboarding && (
                    <Tooltip title="Download as calendar">
                      <Avatar>
                        <MLink
                          onClick={downloadHandler}
                          data-testid={`${token?.queue?.title} cal download`}
                          // sx={{
                          //   marginTop : '15px'
                          // }}
                         
                        >
                          <EventIcon  />
                        </MLink>
                      </Avatar>
                    </Tooltip>
                  )}
                  <Tooltip title="Download token">
                    <Avatar >
                      <DownloadIcon
                       data-testid={`${token?.queue?.title} confirmation download`}
                       
                        onClick={(e: React.MouseEvent) =>
                          downloadToken(token?.token, token?.queue?.title, e)
                        }
                      />
                    </Avatar>
                  </Tooltip>
                  <Tooltip title="Share">
                    <Avatar>
                      <ShareIcon
                      data-testid={`${token?.queue?.title} share confirmation`}
                       
                        sx={
                          {
                            // height : '18px'
                          }
                        }
                      />
                    </Avatar>
                  </Tooltip>
                </Typography>

                <Typography  component="div">
                  <Button
                    data-testid={`${token?.queue?.title} cancel`}
                    onClick={(e: any) =>
                      cancelHandler(token?.token, token?.queue?.title, e)
                    }
                    
                  >
                    {queueStoreStrings.cancel}
                  </Button>
                  <Button
                   data-testid={`${token?.queue?.title} reposition`}
                    onClick={(e: any) =>
                      repositionHandler(
                        token?.token,
                        token?.queue?.title,
                        token,
                        e
                      )
                    }
                    
                  >
                    {queueStoreStrings.reposition}
                  </Button>
                </Typography>
                <Typography  component="div">
                  <Tooltip title="Cancel">
                    <Avatar >
                      <CancelIcon
                    data-testid={`cancel icon ${token?.queue?.title}`}
                    onClick={(e: any) =>
                          cancelHandler(token?.token, token?.queue?.title, e)
                        }
                        
                        sx={{}}
                      />
                    </Avatar>
                  </Tooltip>
                  <Tooltip title="Reposition">
                    <Avatar>
                      <MoveDownIcon
                    data-testid={`reposition icon ${token?.queue?.title}`}
                    onClick={(e: any) =>
                          repositionHandler(
                            token?.token,
                            token?.queue?.title,
                            token,
                            e
                          )
                        }
                        
                      />
                    </Avatar>
                  </Tooltip>
                </Typography>
              </Typography>
            </CardContent>
          </Grid>
        </Card>
      </Grid>
      <div>
        <Dialog
          open={isSelected}
          onClose={onSelectHandler}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          sx={{
            "& .MuiDialogContent-root": {
              padding: "0px",
            },
          }}
        >
          <DialogContent>
            <Image
              loader={myLoader}
              width={300}
              height={300}
              src={imageURL.replace(
                "media/opt/qonemiddleware/eplazza/src/eplazzaadmin/",
                ""
              )}
              onError={onError}
              alt="qr code"
            />
          </DialogContent>
        </Dialog>
      </div>
    </Grid>
  );
}

