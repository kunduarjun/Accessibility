from geopy.geocoders import Nominatim


def get_user_coordinates(address):
    geolocator = Nominatim(user_agent="user_location_app")

    try:
        location = geolocator.geocode(address)

        if location:
            latitude, longitude = location.latitude, location.longitude
            print(f"Latitude: {latitude}, Longitude: {longitude}")
            return latitude, longitude
        else:
            print("Unable to determine coordinates for the provided address.")
            return None, None

    except Exception as e:
        print(f"An error occurred: {e}")
        return None, None


# Call the function to get the user's coordinates
latitude_1, longitude_1 = get_user_coordinates("364 University Ave")
# Test: print(f"Latitude: {latitude_1}, Longitude: {longitude_1}")
