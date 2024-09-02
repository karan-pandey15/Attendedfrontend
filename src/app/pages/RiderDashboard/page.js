"use client";
import { useState, useRef, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import io from "socket.io-client";
import TopNavbar from "@/app/components/topnavbar/page";

const socket = io("http://localhost:5010"); // Adjust as necessary

const RiderDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");
  const [rider, setRider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  const [acceptedRides, setAcceptedRides] = useState([]);
  const sidebarRef = useRef(null);
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Otp code start here
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  // Create references for each OTP input box
  const inputRefs = useRef([]);

  // Function to handle OTP input change
  const handleOtpChange = (e, index) => {
    const newOtp = otp.split("");
    newOtp[index] = e.target.value;
    setOtp(newOtp.join(""));

    // Automatically move to the next input box if a digit is entered
    if (e.target.value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerifyOtp = async () => {
    const response = await fetch("http://localhost:5010/api/otp/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "someUserId", // Replace with actual user ID
        otp,
      }),
    });

    const data = await response.json();

    if (data.success) {
      setMessage("OTP verified successfully!");
    } else {
      setMessage("OTP verification failed. Please try again.");
    }

    // Clear the OTP fields after submission
    setOtp("");
  };

  const handleOutsideClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [sidebarOpen]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/pages/AttendedSignin");
    } else {
      axios
        .get("http://localhost:5010/api/auth/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setRider(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch rider data:", err);
          localStorage.removeItem("token");
          router.push("/pages/AttendedSignin");
        });
    }

    const storedRequests = JSON.parse(localStorage.getItem("requests")) || [];
    setRequests(storedRequests);

    const storedAcceptedRides =
      JSON.parse(localStorage.getItem("acceptedRides")) || [];
    setAcceptedRides(storedAcceptedRides);

    socket.on("newRideRequest", (userData) => {
      setRequests((prevRequests) => {
        const newRequests = [...prevRequests, userData];
        localStorage.setItem("requests", JSON.stringify(newRequests));
        return newRequests;
      });
    });

    socket.on("removeRideRequest", (userSocketId) => {
      setRequests((prevRequests) => {
        const updatedRequests = prevRequests.filter(
          (req) => req.socketId !== userSocketId
        );
        localStorage.setItem("requests", JSON.stringify(updatedRequests));
        return updatedRequests;
      });
    });

    socket.on("acceptedRideDetails", (rideDetails) => {
      setAcceptedRides((prevAcceptedRides) => {
        const newAcceptedRides = [...prevAcceptedRides, rideDetails];
        localStorage.setItem("acceptedRides", JSON.stringify(newAcceptedRides));
        return newAcceptedRides;
      });
    });

    return () => {
      socket.off("newRideRequest");
      socket.off("removeRideRequest");
      socket.off("acceptedRideDetails");
    };
  }, [router]);

  const handleAcceptRide = (request) => {
    socket.emit("acceptRide", {
      riderName: rider.name,
      riderEmail: rider.email,
      riderPhone: rider.phone,
      userSocketId: request.socketId,
      userDetails: {
        name: request.name,
        email: request.email,
        phone: request.phone,
        pickupLocation: request.pickupLocation,
        dropLocation: request.dropLocation,
      },
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("acceptedRides");
    localStorage.removeItem("requests");
    router.push("/pages/AttendedSignin");
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
          <p className="text-white text-lg font-semibold">Loading...</p>
        </div>
      );
    }

    switch (activePage) {
      case "Dashboard":
        return (
          <>
            <TopNavbar />
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-gray-600 mb-4">Rider Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div
                  className="bg-blue-500 text-white p-4 rounded shadow cursor-pointer"
                  onClick={() => setActivePage("Profile")}
                >
                  <h3 className="text-lg font-bold">My Profile</h3>
                  {rider && (
                    <>
                      <p className="text-sm">{rider.name}</p>
                      <p className="text-sm">{rider.email}</p>
                    </>
                  )}
                </div>
                <div
                  className="bg-green-500 text-white p-4 rounded shadow cursor-pointer"
                  onClick={() => setActivePage("Total Bookings")}
                >
                  <h3 className="text-lg font-bold">Total Bookings</h3>
                  <p className="text-2xl">{acceptedRides.length}</p>
                </div>
                <div
                  className="bg-yellow-500 text-white p-4 rounded shadow cursor-pointer"
                  onClick={() => setActivePage("Total Earnings")}
                >
                  <h3 className="text-lg font-bold">Total Earnings</h3>
                  <p className="text-2xl">00</p>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Ride Requests
                </h2>
                {requests.length > 0 ? (
                  requests.map((request, index) => (
                    <div
                      key={index}
                      className="p-4 mb-4 bg-white border-l-4 border-blue-500 rounded-lg shadow-md hover:bg-gray-50 transition duration-300"
                    >
                      <p className="text-gray-800">
                        <strong>User Name:</strong> {request.name}
                      </p>
                      <p className="text-gray-800">
                        <strong>User Email:</strong> {request.email}
                      </p>
                      <p className="text-gray-800">
                        <strong>Pickup Location:</strong>{" "}
                        {request.pickupLocation}
                      </p>
                      <p className="text-gray-800">
                        <strong>Drop Location:</strong> {request.dropLocation}
                      </p>
                      <button
                        onClick={() => handleAcceptRide(request)}
                        className="mt-2 w-full py-2 px-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                      >
                        Accept Ride
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">
                    No ride requests at the moment.
                  </p>
                )}
              </div>
              <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                {/* Heading */}
                <h1 className="text-2xl font-bold mb-6 text-gray-800">
                  Verify OTP
                </h1>

                {/* OTP Input Boxes */}
                <div className="flex space-x-2 mb-4">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      className="w-12 h-12 text-center border border-gray-300 rounded-md shadow-sm text-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      value={otp[index] || ""}
                      ref={(el) => (inputRefs.current[index] = el)}
                      onChange={(e) => handleOtpChange(e, index)}
                    />
                  ))}
                </div>

                {/* Verify Button */}
                <button
                  onClick={handleVerifyOtp}
                  className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                >
                  Verify OTP
                </button>

                {/* Message Display */}
                {message && (
                  <p className="text-lg font-medium text-gray-800 bg-gray-200 p-3 rounded-md shadow-sm">
                    {message}
                  </p>
                )}
              </div>
            </div>
          </>
        );
      case "Profile":
        return (
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-gray-600 mb-4">My Profile</h2>
            {rider && (
              <div>
                <p className="text-lg">
                  <strong>Name:</strong> {rider.name}
                </p>
                <p className="text-lg">
                  <strong>Email:</strong> {rider.email}
                </p>
                <p className="text-lg">
                  <strong>Phone:</strong> {rider.phone}
                </p>
                <p className="text-lg">
                  <strong>Vehicle:</strong> {rider.vehicle}
                </p>
              </div>
            )}
            <button
              onClick={() => setActivePage("Dashboard")}
              className="mt-4 w-full py-3 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Back to Dashboard
            </button>
          </div>
        );
      case "Total Bookings":
        return (
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-gray-600 mb-4">Total Bookings</h2>
            {acceptedRides.length > 0 ? (
              acceptedRides.map((ride, index) => (
                <div
                  key={index}
                  className="p-4 mb-4 bg-white border-l-4 border-blue-500 rounded-lg shadow-md"
                >
                  <p className="text-gray-800">
                    <strong>User Name:</strong> {ride.userDetails.name}
                  </p>
                  <p className="text-gray-800">
                    <strong>Email:</strong> {ride.userDetails.email}
                  </p>
                  <p className="text-gray-800">
                    <strong>Pickup Location:</strong> {ride.pickupLocation}
                  </p>
                  <p className="text-gray-800">
                    <strong>Drop Location:</strong> {ride.dropLocation}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No bookings yet.</p>
            )}
            <button
              onClick={() => setActivePage("Dashboard")}
              className="mt-4 w-full py-3 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Back to Dashboard
            </button>
          </div>
        );
      case "Total Earnings":
        return (
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-gray-600 mb-4">Total Earnings</h2>
            <p className="text-lg">Total Earnings: 00</p>
            <button
              onClick={() => setActivePage("Dashboard")}
              className="mt-4 w-full py-3 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Back to Dashboard
            </button>
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="flex">
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:flex md:flex-col md:w-64 md:bg-white md:text-gray-900`}
        style={{ width: "250px" }} // Set a fixed width for the sidebar
      >
        <div className="flex items-center justify-between p-4 md:hidden">
          <h2 className="text-gray-900 text-lg font-semibold">
            Rider Dashboard
          </h2>
          {/* <AiOutlineClose onClick={toggleSidebar} className="text-gray-900 text-2xl cursor-pointer" /> */}
        </div>
        <div className="flex flex-col flex-1 p-4 space-y-4">
          <Link
            href="/pages/RiderDashboard"
            onClick={() => setActivePage("Dashboard")}
          >
            <span
              className={`text-gray-900 ${
                activePage === "Dashboard" ? "font-bold" : ""
              }`}
            >
              Dashboard
            </span>
          </Link>
          <Link
            href="/pages/RiderDashboard"
            onClick={() => setActivePage("Profile")}
          >
            <span
              className={`text-gray-900 ${
                activePage === "Profile" ? "font-bold" : ""
              }`}
            >
              My Profile
            </span>
          </Link>
          <Link
            href="/pages/RiderDashboard"
            onClick={() => setActivePage("Total Bookings")}
          >
            <span
              className={`text-gray-900 ${
                activePage === "Total Bookings" ? "font-bold" : ""
              }`}
            >
              Total Bookings
            </span>
          </Link>
          <Link
            href="/pages/RiderDashboard"
            onClick={() => setActivePage("Total Earnings")}
          >
            <span
              className={`text-gray-900 ${
                activePage === "Total Earnings" ? "font-bold" : ""
              }`}
            >
              Total Earnings
            </span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Logout
          </button>
        </div>
      </div>
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">
        {renderContent()}
      </main>
      <div className="fixed top-4 right-4 md:hidden">
        <AiOutlineMenu
          onClick={toggleSidebar}
          className="text-2xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default RiderDashboard;
